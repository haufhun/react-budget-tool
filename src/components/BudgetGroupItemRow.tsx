import { useDrop } from "react-dnd";
import {
  Transaction,
  BudgetGroupItem,
  UpdateTransactionMutationVariables,
} from "../API";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateTransaction as updateTransactionMutation } from "../graphql/mutations";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchTransactions,
  getCurrentBudget,
  setSelectedBudgetGroupItem,
} from "../app/appSlice";
import BudgetGroupItemService from "../utils/BudgetGroupItemService";
import moment from "moment";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

type BudgetGroupItemProps = {
  budgetGroupItem: BudgetGroupItem;
};

function BudgetGroupItemRow({ budgetGroupItem }: BudgetGroupItemProps) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    dispatch(setSelectedBudgetGroupItem(null));
  });
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
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  const handleDrop = async (transactionId, budgetGroupItemId) => {
    await updateTransaction(transactionId, budgetGroupItemId);
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    await BudgetGroupItemService.delete(budgetGroupItem.id);
    setIsDeleting(false);
    refresh();
  };

  const updateTransaction = async (transactionId, budgetGroupItemId) => {
    try {
      const input: UpdateTransactionMutationVariables = {
        input: {
          id: transactionId,
          budgetGroupItemTransactionsId: budgetGroupItemId,
        },
      };
      await API.graphql(graphqlOperation(updateTransactionMutation, input));

      dispatch(fetchTransactions());
    } catch (e) {
      console.error(e);
    }
  };

  const viewRow = () => (
    <Stack
      direction="row"
      onClick={() => dispatch(setSelectedBudgetGroupItem(budgetGroupItem))}
      sx={{
        backgroundColor: isOver ? "#ebf4fa" : "#3f6c8a",
        paddingX: 2,
        paddingY: 2,
        borderRadius: 2,
      }}
    >
      <Typography flex={6} textAlign="left">
        {budgetGroupItem.name}
      </Typography>
      <Typography flex={3} textAlign="right">
        {budgetGroupItem.amountBudgeted ?? "null"}
      </Typography>
      <Typography flex={3} textAlign="right">
        {budgetGroupItem.amountBudgeted ?? "null"}
      </Typography>
    </Stack>
  );

  const editRow = () => (
    <Stack
      ref={wrapperRef}
      direction="row"
      spacing={4}
      alignItems="center"
      sx={{
        backgroundColor: isOver ? "#ebf4fa" : "#3f6c8a",
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
        value={budgetGroupItem.name}
        size="small"
        autoFocus
      />
      <TextField
        sx={{ flex: 3, textAlign: "right" }}
        value={budgetGroupItem.amountBudgeted ?? null}
        size="small"
      />

      <Typography flex={3} textAlign="right">
        {budgetGroupItem.amountBudgeted ?? "null"}
      </Typography>
    </Stack>
  );

  const showEditRow =
    selectedBudgetGroupItem?.id === budgetGroupItem.id || isDeleting;

  return <Box ref={drop}>{showEditRow ? editRow() : viewRow()}</Box>;
}

export default BudgetGroupItemRow;
