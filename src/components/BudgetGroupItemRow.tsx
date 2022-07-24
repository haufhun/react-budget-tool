import { useDrop } from "react-dnd";
import {
  Transaction,
  BudgetGroupItem,
  UpdateTransactionMutationVariables,
} from "../API";
import { Stack, TextField, Typography } from "@mui/material";

import { API, graphqlOperation } from "aws-amplify";
import { updateTransaction as updateTransactionMutation } from "../graphql/mutations";
import { useAppDispatch } from "../app/hooks";
import { fetchTransactions } from "../app/appSlice";

type BudgetGroupItemProps = {
  budgetGroupItem: BudgetGroupItem;
};

function BudgetGroupItemRow({ budgetGroupItem }: BudgetGroupItemProps) {
  const dispatch = useAppDispatch();
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

  const handleDrop = async (transactionId, budgetGroupItemId) => {
    console.log("Should drop transaction into category:", budgetGroupItem);
    await updateTransaction(transactionId, budgetGroupItemId);
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

  return (
    <Stack
      key={budgetGroupItem.id}
      ref={drop}
      direction="row"
      onClick={() =>
        console.log("Selected budeget group item:", budgetGroupItem)
      }
      sx={{
        backgroundColor: isOver ? "#ebf4fa" : "#3f6c8a",
        paddingX: 2,
        paddingY: 2,
        borderRadius: 2,
      }}
    >
      <Typography flex={7} textAlign="left">
        {budgetGroupItem.name}
      </Typography>
      <Typography flex={2} textAlign="right">
        {budgetGroupItem.amountBudgeted ?? "null"}
      </Typography>
    </Stack>
  );
}

export default BudgetGroupItemRow;
