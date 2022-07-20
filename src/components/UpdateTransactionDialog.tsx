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
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateTransaction as updateTransactionMutation } from "../graphql/mutations";
import {
  BankAccount,
  Transaction,
  UpdateTransactionMutationVariables,
  ListBankAccountsQuery,
  Category,
  ListCategoriesQuery,
} from "../API";
import { listBankAccounts, listCategories } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchCategories } from "../app/appSlice";

type UpdateTransactionDialogProps = {
  transaction: Transaction;
  refresh: () => Promise<void>;
  open: boolean;
  handleClose: () => void;
};

function UpdateTransactionDialog({
  transaction,
  refresh,
  open,
  handleClose,
}: UpdateTransactionDialogProps) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.app.categories.items
  );
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [name, setName] = useState(transaction.name);
  const [description, setDescription] = useState(transaction.description);
  const [date, setDate] = useState(transaction.date);
  const [amount, setAmount] = useState(transaction.amount.toString());
  const [bankAccounts, setBankAccounts] = useState<any>([]);
  const [accountName, setAccountName] = useState(transaction.account.name);
  const [categoryName, setCategoryName] = useState(transaction.account.name);

  const selectedAccount: BankAccount = bankAccounts.find(
    (a: BankAccount) => a.name === accountName
  );
  const selectedCategory: Category | undefined = categories.find(
    (c: Category) => c.name === categoryName
  );

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setDate("2022-07-18");
    setAmount("0.0");
    setAccountName("");
  };

  const updateTransaction = async () => {
    setIsUpdateLoading(true);
    const parsedAmount = parseFloat(amount);
    try {
      const input: UpdateTransactionMutationVariables = {
        input: {
          id: transaction.id,
          name,
          description,
          date,
          amount: parsedAmount,
          bankAccountTransactionsId: selectedAccount.id,
          categoryTransactionsId: selectedCategory?.id,
        },
      };
      await API.graphql(graphqlOperation(updateTransactionMutation, input));

      await refresh();
      clearForm();
    } catch (e) {
      console.error(e);
    } finally {
      setIsUpdateLoading(false);
    }
  };

  const getBankAccounts = async () => {
    const accountsResponse = (await API.graphql(
      graphqlOperation(listBankAccounts)
    )) as GraphQLResult<ListBankAccountsQuery>;
    const accounts = accountsResponse?.data?.listBankAccounts?.items;
    setBankAccounts(accounts);
  };

  useEffect(() => {
    getBankAccounts();
    dispatch(fetchCategories());
  }, []);

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

          <FormControl fullWidth>
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
