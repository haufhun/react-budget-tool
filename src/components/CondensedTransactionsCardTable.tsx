import { Paper, Stack, Typography, Divider, Fab, Box } from "@mui/material";
import TransactionCard from "./TransactionCard";
import { Transaction } from "../API";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import CreateTransactionDialog from "./CreateTransactionDialog";

function CondensedTransactionsCardTable() {
  const transactions = useAppSelector((state) => state.app.transactions.items);
  const [showCreateTransactionDialog, setShowCreateTransactionDialog] =
    useState(false);

  return (
    <>
      <CreateTransactionDialog
        open={showCreateTransactionDialog}
        handleClose={() => setShowCreateTransactionDialog(false)}
      />

      <Paper elevation={3} sx={{ width: "464px", height: "100vh" }}>
        <Stack>
          <Typography variant="h5" padding={2}>
            Transactions
          </Typography>

          <Divider />

          {transactions.map((transaction: Transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </Stack>

        <Fab
          color="primary"
          onClick={() => setShowCreateTransactionDialog(true)}
        >
          <AddIcon />
        </Fab>
      </Paper>
    </>
  );
}

export default CondensedTransactionsCardTable;
