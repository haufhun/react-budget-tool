import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import { BankAccount, Transaction, UpdateTransactionInput } from "../API";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  fetchBankAccounts,
  fetchTransactions,
  getCurrentBudget,
} from "../app/appSlice";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import TransactionService from "../utils/TransactionService";
import moment from "moment";
import CurrencyInput from "react-currency-input-field";

type UpdateTransactionDialogProps = {
  transaction: Transaction;
  open: boolean;
  handleClose: () => void;
};

function UpdateTransactionDialog({
  transaction,
  open,
  handleClose,
}: UpdateTransactionDialogProps) {
  const dispatch = useAppDispatch();
  const bankAccounts = useAppSelector(
    (state: RootState) => state.app.bankAccounts.items
  );

  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [name, setName] = useState(transaction.name);
  const [description, setDescription] = useState(transaction.description);
  const [date, setDate] = useState(transaction.date);
  const [amount, setAmount] = useState(transaction.amount);
  const [accountName, setAccountName] = useState(transaction.account.name);
  const [budgetGroupItemName, setBudgetGroupItemName] = useState(
    transaction.budgetGroupItem?.name
  );

  const selectedAccount: BankAccount | undefined = bankAccounts.find(
    (a) => a.name === accountName
  );

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setDate("2022-07-18");
    setAmount(0);
    setAccountName("");
  };

  const updateTransaction = async () => {
    setIsUpdateLoading(true);

    const input: UpdateTransactionInput = {
      id: transaction.id,
      name,
      description,
      date,
      amount: amount,
      bankAccountTransactionsId: selectedAccount?.id,
    };
    if (!budgetGroupItemName) input.budgetGroupItemTransactionsId = null;

    await TransactionService.update(input);

    dispatch(fetchTransactions());
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
    clearForm();

    setIsUpdateLoading(false);
  };

  useEffect(() => {
    dispatch(fetchBankAccounts());
  }, [dispatch]);

  return (
    <>
      <Dialog disableEscapeKeyDown open={open} onClose={closeDialog}>
        <DialogTitle sx={{ paddingBottom: 2 }}>Update Transaction</DialogTitle>
        <DialogContent sx={{ paddingY: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginY: 1 }}
          />

          <TextField
            fullWidth
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ marginY: 1 }}
          />

          <FormControl fullWidth sx={{ marginTop: 1, marginBottom: 2 }}>
            <CurrencyInput
              prefix="$"
              decimalScale={2}
              defaultValue={0.0}
              decimalsLimit={2}
              value={amount}
              onValueChange={(value) => value && setAmount(parseFloat(value))}
            />
          </FormControl>

          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel>Account</InputLabel>
            <Select
              label="Account"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            >
              {bankAccounts.map((account: any) => (
                <MenuItem key={account.id} value={account.name}>
                  {account.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {budgetGroupItemName && (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ m: 1 }}
            >
              <IconButton
                color="error"
                onClick={() => setBudgetGroupItemName(undefined)}
              >
                <RemoveCircleIcon />
              </IconButton>

              <Typography>{transaction.budgetGroupItem?.name}</Typography>
            </Stack>
          )}

          <TextField
            fullWidth
            multiline={true}
            minRows={3}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginY: 1 }}
          />

          <DialogActions>
            <Button onClick={() => handleClose()} color="secondary">
              Cancel
            </Button>
            <LoadingButton
              onClick={() => {
                updateTransaction().then(handleClose);
              }}
              loading={isUpdateLoading}
            >
              Update
            </LoadingButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UpdateTransactionDialog;
