import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
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
import { API, graphqlOperation } from "aws-amplify";
import { createTransaction as createTransactionMutation } from "../graphql/mutations";
import {
  BankAccount,
  CreateTransactionMutationVariables,
  ListBankAccountsQuery,
} from "../API";
import { listBankAccounts } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Container } from "@mui/system";

type CreateTransactionDialogProps = {
  refresh: () => Promise<void>;
  open: boolean;
  handleClose: () => void;
};

function CreateTransactionDialog({
  refresh,
  open,
  handleClose,
}: CreateTransactionDialogProps) {
  const [isGettingBankAccounts, setIsGettingBankAccounts] = useState(false);
  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("2022-07-18");
  const [amount, setAmount] = useState("0.0");
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedAccountName, setSelectedAccountName] = useState("");
  const [bankAccounts, setBankAccounts] = useState<any>([]);

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setDate("2022-07-18");
    setAmount("0.0");
    setSelectedAccountId("");
    setSelectedAccountName("");
  };

  const createTransaction = async () => {
    setIsCreateLoading(true);
    const parsedAmount = parseFloat(amount);
    try {
      const input: CreateTransactionMutationVariables = {
        input: {
          name,
          description,
          date,
          amount: parsedAmount,
          bankAccountTransactionsId: selectedAccountId,
        },
      };
      await API.graphql(graphqlOperation(createTransactionMutation, input));

      await refresh();
      clearForm();
    } catch (e) {
      console.error(e);
    } finally {
      setIsCreateLoading(false);
    }
  };

  const getBankAccounts = async () => {
    setIsGettingBankAccounts(true);

    const accountsResponse = (await API.graphql(
      graphqlOperation(listBankAccounts)
    )) as GraphQLResult<ListBankAccountsQuery>;
    const accounts = accountsResponse?.data?.listBankAccounts?.items;
    setBankAccounts(accounts);

    setIsGettingBankAccounts(false);
  };

  useEffect(() => {
    getBankAccounts();
  }, []);

  return (
    <>
      <Dialog disableEscapeKeyDown open={open} onClose={closeDialog}>
        <DialogTitle sx={{ paddingBottom: 2 }}>
          Create New Transaction
        </DialogTitle>
        <DialogContent sx={{ paddingY: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Account</InputLabel>
            <Select
              label="Account"
              value={selectedAccountName}
              onChange={(e) => {
                const accountName: any = e.target.value;
                const account = bankAccounts.filter(
                  (a: BankAccount) => a.name === accountName
                )[0];

                setSelectedAccountId(account.id);
                setSelectedAccountName(account.name);
              }}
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
