import { useEffect } from "react";
import { Paper, Stack, Typography, Divider } from "@mui/material";
import TransactionCard from "./TransactionCard";
import { Transaction } from "../API";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchTransactions } from "../app/appSlice";

function CondensedTransactionsCardTable() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.app.transactions.items);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
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
    </Paper>
  );
}

export default CondensedTransactionsCardTable;
