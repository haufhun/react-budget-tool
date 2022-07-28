import { Paper, Stack, Typography, Divider } from "@mui/material";
import TransactionCard from "./TransactionCard";
import { Transaction } from "../API";
import { useAppSelector } from "../app/hooks";

function CondensedTransactionsCardTable() {
  const transactions = useAppSelector((state) => state.app.transactions.items);

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
