import { Button, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteTransaction as deleteTransactionMutation } from "../graphql/mutations";
import {
  DeleteTransactionMutationVariables,
  ListTransactionsQuery,
  Transaction,
} from "../API";
import { listTransactions } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CreateTransactionDialog from "./CreateTransactionDialog";
import TransactionsTable from "./TransactionsTable";
import UpdateTransactionDialog from "./UpdateTransactionDialog";
import EnhancedTable from "./EnhancedTable";

const TransactionsCardTable = ({
  transactions,
  setSelectedTransaction,
  setIsUpdateDialogOpen,
  isDeleteLoading,
  deleteAccount,
}) => {
  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingX: 2,
          paddingY: 2,
          borderRadius: 2,
        }}
      >
        <Typography>Name</Typography>
        <Typography>Date</Typography>
        <Typography>Account Name</Typography>
        <Typography>Category</Typography>
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
          }}
          onClick={() => {
            setSelectedTransaction(transaction);
            setIsUpdateDialogOpen(true);
          }}
        >
          <Typography>{transaction.name}</Typography>
          <Typography>{transaction.date}</Typography>
          <Typography>{transaction.account.name}</Typography>
          <Typography>{transaction.category?.name ?? "null"}</Typography>
          <Typography>${transaction.amount.toFixed(2)}</Typography>

          <LoadingButton
            color="error"
            variant="contained"
            loading={isDeleteLoading}
            onClick={() => deleteAccount(transaction.id)}
          >
            Delete
          </LoadingButton>
        </Stack>
      ))}
    </Stack>
  );
};

function Transactions() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const deleteAccount = async (id: string) => {
    setIsDeleteLoading(true);
    try {
      const input: DeleteTransactionMutationVariables = {
        input: {
          id: id,
        },
      };
      await API.graphql(graphqlOperation(deleteTransactionMutation, input));

      await refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const refresh = async () => {
    setIsRefreshLoading(true);
    try {
      const response = (await API.graphql(
        graphqlOperation(listTransactions)
      )) as GraphQLResult<ListTransactionsQuery>;
      const transactions = (response?.data?.listTransactions?.items ??
        []) as Transaction[];
      setTransactions(transactions);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRefreshLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <CreateTransactionDialog
        refresh={refresh}
        open={isCreateDialogOpen}
        handleClose={() => setIsCreateDialogOpen(false)}
      />
      {selectedTransaction && (
        <UpdateTransactionDialog
          transaction={selectedTransaction}
          refresh={refresh}
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
            <LoadingButton onClick={refresh} loading={isRefreshLoading}>
              Refresh
            </LoadingButton>
            <Button onClick={() => setIsCreateDialogOpen(true)}>Create</Button>
          </Stack>

          {/* // TODO: Pick our which way to display transactions */}

          {/* <TransactionsTable /> */}
          {/* <EnhancedTable /> */}

          <TransactionsCardTable
            transactions={transactions}
            setSelectedTransaction={setSelectedTransaction}
            setIsUpdateDialogOpen={setIsUpdateDialogOpen}
            isDeleteLoading={isDeleteLoading}
            deleteAccount={deleteAccount}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Transactions;
