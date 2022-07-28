import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
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

  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("2022-07-18");
  const [amount, setAmount] = useState("0.0");
  const [selectedAccountName, setSelectedAccountName] = useState("");
  // const [categoryName, setCategoryName] = useState("");

  const selectedAccount = bankAccounts.find(
    (a: BankAccount) => a.name === selectedAccountName
  )!;
  // const selectedCategory: Category | undefined = categories.find(
  //   (c: Category) => c.name === categoryName
  // );

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setDate("2022-07-18");
    setAmount("0.0");
    setSelectedAccountName("");
  };

  const refresh = () => {
    dispatch(fetchTransactions());
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
          bankAccountTransactionsId: selectedAccount.id,
          budgetGroupItemTransactionsId: "", // TODO: Update this
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
              onChange={(e) => setSelectedAccountName(e.target.value)}
            >
              {bankAccounts.map((account: any) => (
                <MenuItem key={account.id} value={account.name}>
                  {account.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              {categories.map((category: any) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

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
