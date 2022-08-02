import { Stack, Typography, Divider } from "@mui/material";
import { Transaction } from "../API";
import moment from "moment";
import { useDrag } from "react-dnd";
import UpdateTransactionDialog from "./UpdateTransactionDialog";
import { useState } from "react";
import { hoverColor } from "../common/theme";

type TransactionCardProps = {
  transaction: Transaction;
};

function TransactionCard({ transaction }: TransactionCardProps) {
  const [showUpdateTransactionDialog, setShowUpdateTransactionDialog] =
    useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Transaction",
    item: transaction,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <UpdateTransactionDialog
        transaction={transaction}
        open={showUpdateTransactionDialog}
        handleClose={() => setShowUpdateTransactionDialog(false)}
      />

      <Stack
        ref={drag}
        onClick={() => setShowUpdateTransactionDialog(true)}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          cursor: "pointer",
          backgroundColor: isDragging ? hoverColor : "white",
          paddingX: 2,
          paddingY: 2,
          borderRadius: 2,
          "&:hover": {
            backgroundColor: hoverColor,
          },
        }}
      >
        <Stack flex={1}>
          <Typography>{moment(transaction.date).format("MMM")}</Typography>
          <Typography>{moment(transaction.date).format("DD")}</Typography>
        </Stack>

        <Stack flex={10}>
          <Typography>{transaction.name}</Typography>
          {transaction.budgetGroupItem?.name && (
            <Typography color="#54a0ea">
              {transaction.budgetGroupItem.name}
            </Typography>
          )}
        </Stack>

        <Typography flex={1}>${transaction.amount.toFixed(2)}</Typography>
      </Stack>

      <Divider />
    </>
  );
}

export default TransactionCard;
