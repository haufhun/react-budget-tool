import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTransaction as createTransactionMutation } from "../graphql/mutations";
import { BankAccount, CreateTransactionMutationVariables } from "../API";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchTransactions } from "../app/appSlice";
import moment from "moment";
import CurrencyInput from "react-currency-input-field";

type CreateTransactionDialogProps = {
  open: boolean;
  handleClose: () => void;
};

function CreateTransactionDialog({
  open,
  handleClose,
}: CreateTransactionDialogProps) {
  const dispatch = useAppDispatch();
  const bankAccounts = useAppSelector((state) => state.app.bankAccounts.items);
  const today = moment().format("YYYY-MM-DD");

  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(today);
  const [amount, setAmount] = useState("0");
  const [selectedAccountName, setSelectedAccountName] = useState("");

  const selectedAccount = bankAccounts.find(
    (a: BankAccount) => a.name === selectedAccountName
  )!;

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setDate(today);
    setAmount("0");
    setSelectedAccountName("");
  };

  const refresh = () => {
    dispatch(fetchTransactions());
  };

  const createTransaction = async () => {
    setIsCreateLoading(true);
    try {
      const input: CreateTransactionMutationVariables = {
        input: {
          name,
          description,
          date,
          amount: parseFloat(amount),
          bankAccountTransactionsId: selectedAccount.id,
        },
      };
      await API.graphql(graphqlOperation(createTransactionMutation, input));

      refresh();
      clearForm();
    } catch (e) {
      console.error(e);
    } finally {
      setIsCreateLoading(false);
    }
  };

  return (
    <>
      <Dialog disableEscapeKeyDown open={open} onClose={closeDialog}>
        <DialogTitle sx={{ paddingBottom: 2 }}>
          Create New Transaction
        </DialogTitle>
        <DialogContent sx={{ paddingY: 3 }}>
          <TextField
            fullWidth
            sx={{ marginY: 1 }}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            sx={{ marginY: 1 }}
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <FormControl fullWidth sx={{ marginTop: 1, marginBottom: 2 }}>
            <CurrencyInput
              prefix="$"
              decimalScale={2}
              defaultValue={0.0}
              decimalsLimit={2}
              value={amount}
              onValueChange={(value) => value && setAmount(value)}
            />
          </FormControl>

          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel>Account</InputLabel>
            <Select
              label="Account"
              value={selectedAccountName}
              onChange={(e) => setSelectedAccountName(e.target.value)}
            >
              {bankAccounts.map((account: any) => (
                <MenuItem key={account.id} value={account.name}>
                  {account.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            sx={{ marginY: 1 }}
            multiline={true}
            minRows={3}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <DialogActions>
            <Button onClick={() => handleClose()} color="secondary">
              Cancel
            </Button>
            <LoadingButton
              onClick={createTransaction}
              loading={isCreateLoading}
            >
              Create (Another)
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                createTransaction().then(handleClose);
              }}
              loading={isCreateLoading}
            >
              Create
            </LoadingButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateTransactionDialog;
