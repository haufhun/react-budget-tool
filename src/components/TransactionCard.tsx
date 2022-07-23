import { Stack, Typography, Divider, Box } from "@mui/material";
import { Transaction } from "../API";
import moment from "moment";
import { useDrag } from "react-dnd";

type TransactionCardProps = {
  transaction: Transaction;
};

function TransactionCard({ transaction }: TransactionCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Transaction",
    item: transaction,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <Stack
        ref={drag}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundColor: isDragging ? "#ebf4fa" : "white",
          paddingX: 2,
          paddingY: 2,
          borderRadius: 2,
        }}
      >
        <Stack flex={2}>
          <Typography>{moment(transaction.date).format("MMM")}</Typography>
          <Typography>{moment(transaction.date).format("DD")}</Typography>
        </Stack>

        <Typography flex={5}>{transaction.name}</Typography>
        {/* <Typography flex={3}>{transaction.category?.name ?? "null"}</Typography> */}
        <Typography flex={3}>${transaction.amount.toFixed(2)}</Typography>
      </Stack>

      <Divider />
    </>
  );
}

export default TransactionCard;
