import { useDrop } from "react-dnd";
import {
  Transaction,
  BudgetGroupItem,
  UpdateBudgetGroupItemInput,
} from "../API";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchTransactions,
  getCurrentBudget,
  setSelectedBudgetGroupItem,
} from "../app/appSlice";
import BudgetGroupItemService from "../utils/BudgetGroupItemService";
import moment from "moment";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import TransactionService from "../utils/TransactionService";
import CurrencyInput from "react-currency-input-field";
import { currency } from "../utils/utils";
import { hoverColor, remainingBlue } from "../common/theme";

type BudgetGroupItemProps = {
  budgetGroupItem: BudgetGroupItem;
};

const EditRow = ({
  budgetGroupItem,
  setIsDeleting,
  remaining,
}: {
  budgetGroupItem: BudgetGroupItem;
  setIsDeleting: any;
  remaining: number;
}) => {
  const wrapperRef = useRef(null);
  const dispatch = useAppDispatch();
  useOutsideAlerter(wrapperRef, async () => {
    const possibleVars: any = {};
    if (name !== budgetGroupItem.name) possibleVars.name = name;
    if (amountBudgeted !== budgetGroupItem.amountBudgeted)
      possibleVars.amountBudgeted = amountBudgeted;

    const needsUpdates =
      name !== budgetGroupItem.name ||
      amountBudgeted !== budgetGroupItem.amountBudgeted;

    if (needsUpdates) {
      const updateVars: UpdateBudgetGroupItemInput = {
        id: budgetGroupItem.id,
        ...possibleVars,
      };

      await BudgetGroupItemService.update(updateVars);
      refresh();
    } else {
      console.log("Nothing to update in budgetItemRow");
    }

    dispatch(setSelectedBudgetGroupItem(null));
  });

  const [name, setName] = useState(budgetGroupItem.name);
  const [amountBudgeted, setAmountBudgeted] = useState(
    budgetGroupItem.amountBudgeted
  );

  const refresh = () => {
    dispatch(fetchTransactions());
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    await BudgetGroupItemService.delete(budgetGroupItem.id);
    setIsDeleting(false);
    refresh();
  };

  return (
    <Stack
      ref={wrapperRef}
      direction="row"
      spacing={4}
      alignItems="center"
      sx={{
        backgroundColor: "white",
        paddingX: 2,
        paddingY: 2,
        borderRadius: 2,
        marginX: -5,
      }}
    >
      <IconButton color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <TextField
        sx={{ flex: 6, textAlign: "right" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        size="small"
        autoFocus
      />
      <CurrencyInput
        style={{
          flex: 3,
          textAlign: "right",
        }}
        prefix="$"
        decimalScale={2}
        defaultValue={0.0}
        decimalsLimit={2}
        value={amountBudgeted}
        onValueChange={(value) => value && setAmountBudgeted(parseFloat(value))}
      />

      <Typography flex={3} textAlign="right" color={remainingBlue}>
        {currency(remaining)}
      </Typography>
    </Stack>
  );
};

function BudgetGroupItemRow({ budgetGroupItem }: BudgetGroupItemProps) {
  const dispatch = useAppDispatch();
  const selectedBudgetGroupItem = useAppSelector(
    (state) => state.app.currentBudget.selectedBudgetGroupItem
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "Transaction",
      drop: (item: Transaction) => handleDrop(item.id, budgetGroupItem.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [budgetGroupItem.id]
  );

  const refresh = () => {
    dispatch(fetchTransactions());
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  const totalSpent =
    budgetGroupItem.transactions?.items.reduce((count, transaction) => {
      if (transaction) return transaction.amount + count;

      return count;
    }, 0) ?? 0;

  const remaining = budgetGroupItem.amountBudgeted - totalSpent;

  const handleDrop = async (
    transactionId: string,
    budgetGroupItemId: string
  ) => {
    await TransactionService.update({
      id: transactionId,
      budgetGroupItemTransactionsId: budgetGroupItemId,
    });
    refresh();
  };

  const viewRow = () => (
    <Stack
      direction="row"
      onClick={() => dispatch(setSelectedBudgetGroupItem(budgetGroupItem))}
      sx={{
        backgroundColor: isOver ? hoverColor : "white",
        paddingX: 2,
        paddingY: 2,
        borderRadius: 2,
      }}
    >
      <Typography flex={6} textAlign="left">
        {budgetGroupItem.name}
      </Typography>
      <Typography flex={3} textAlign="right">
        {currency(budgetGroupItem.amountBudgeted)}
      </Typography>
      <Typography flex={3} textAlign="right" color={remainingBlue}>
        {currency(remaining)}
      </Typography>
    </Stack>
  );

  const showEditRow =
    selectedBudgetGroupItem?.id === budgetGroupItem.id || isDeleting;

  return (
    <Box ref={drop}>
      {showEditRow ? (
        <EditRow
          budgetGroupItem={budgetGroupItem}
          setIsDeleting={setIsDeleting}
          remaining={remaining}
        />
      ) : (
        viewRow()
      )}
    </Box>
  );
}

export default BudgetGroupItemRow;
