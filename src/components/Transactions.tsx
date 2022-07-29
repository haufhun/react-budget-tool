import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Button, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/system";
import { Transaction } from "../API";
import CreateTransactionDialog from "./CreateTransactionDialog";
import UpdateTransactionDialog from "./UpdateTransactionDialog";

import { RootState } from "../app/store";
import { fetchTransactions } from "../app/appSlice";
import TransactionService from "../utils/TransactionService";

const TransactionsCardTable = ({
  setSelectedTransaction,
  setIsUpdateDialogOpen,
}) => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.app.transactions.items);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          paddingX: 2,
          paddingY: 2,
          borderRadius: 2,
        }}
      >
        <Typography>Name</Typography>
        <Typography>Date</Typography>
        <Typography>Account Name</Typography>
        <Typography>BudgetItem</Typography>
        <Typography>Amount</Typography>
        <Typography>Action</Typography>
      </Stack>

      {transactions.map((transaction: Transaction) => (
        <Stack
          key={transaction.id}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            backgroundColor: "#3f6c8a",
            paddingX: 2,
            paddingY: 2,
            borderRadius: 2,
            cursor: "pointer",
          }}
          onClick={() => {
            setIsDeleteLoading(true);
            setSelectedTransaction(transaction);
            setIsUpdateDialogOpen(true);
            setIsDeleteLoading(false);
          }}
        >
          <Typography>{transaction.name}</Typography>
          <Typography>{transaction.date}</Typography>
          <Typography>{transaction.account.name}</Typography>
          <Typography>{transaction.budgetGroupItem?.name ?? "null"}</Typography>
          <Typography>${transaction.amount.toFixed(2)}</Typography>

          <LoadingButton
            color="error"
            variant="contained"
            loading={isDeleteLoading}
            onClick={async () => {
              await TransactionService.delete(transaction.id);
              dispatch(fetchTransactions());
            }}
          >
            Delete
          </LoadingButton>
        </Stack>
      ))}
    </Stack>
  );
};

function Transactions() {
  const dispatch = useAppDispatch();
  const transactionRefreshLoading = useAppSelector(
    (state: RootState) => state.app.transactions.fetchLoading
  );

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  return (
    <>
      <CreateTransactionDialog
        open={isCreateDialogOpen}
        handleClose={() => setIsCreateDialogOpen(false)}
      />
      {selectedTransaction && (
        <UpdateTransactionDialog
          transaction={selectedTransaction}
          open={isUpdateDialogOpen}
          handleClose={() => {
            setIsUpdateDialogOpen(false);
            setSelectedTransaction(null);
          }}
        />
      )}
      <Container>
        <Stack>
          <Stack
            sx={{ paddingY: 2 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Transactions</Typography>
            <LoadingButton
              onClick={() => dispatch(fetchTransactions())}
              loading={transactionRefreshLoading}
            >
              Refresh
            </LoadingButton>
            <Button onClick={() => setIsCreateDialogOpen(true)}>Create</Button>
          </Stack>

          <TransactionsCardTable
            setSelectedTransaction={setSelectedTransaction}
            setIsUpdateDialogOpen={setIsUpdateDialogOpen}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Transactions;
