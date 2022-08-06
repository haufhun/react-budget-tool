import { useState } from "react";
import { Container, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { API, graphqlOperation } from "aws-amplify";
import {
  createBankAccount as createBankAccountMutation,
  deleteBankAccount as deleteBankAccountMutation,
} from "../graphql/mutations";
import {
  CreateBankAccountMutationVariables,
  DeleteBankAccountMutationVariables,
} from "../API";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchBankAccounts } from "../app/appSlice";

function Accounts() {
  const dispatch = useAppDispatch();
  const bankAccounts = useAppSelector((state) => state.app.bankAccounts.items);
  const isRefreshLoading = useAppSelector(
    (state) => state.app.bankAccounts.fetchLoading
  );
  const [accountName, setAccountName] = useState("");
  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const createAccount = async () => {
    setIsCreateLoading(true);
    try {
      const input: CreateBankAccountMutationVariables = {
        input: {
          name: accountName,
        },
      };
      await API.graphql(graphqlOperation(createBankAccountMutation, input));

      setAccountName("");

      refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsCreateLoading(false);
    }
  };

  const deleteAccount = async (id: string) => {
    setIsDeleteLoading(true);
    try {
      const input: DeleteBankAccountMutationVariables = {
        input: {
          id: id,
        },
      };
      await API.graphql(graphqlOperation(deleteBankAccountMutation, input));

      refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const refresh = () => {
    dispatch(fetchBankAccounts());
  };

  return (
    <>
      <Container>
        <Stack>
          <TextField
            label="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
          <LoadingButton onClick={createAccount} loading={isCreateLoading}>
            Create Account
          </LoadingButton>

          <br />

          <Typography variant="h5">Accounts List</Typography>
          <LoadingButton onClick={refresh} loading={isRefreshLoading}>
            Refresh
          </LoadingButton>

          <ul>
            {bankAccounts.map((bankAccount: any) => (
              <Stack direction="row" justifyContent="space-between">
                <li>{bankAccount.name}</li>
                <LoadingButton
                  onClick={() => deleteAccount(bankAccount.id)}
                  loading={isDeleteLoading}
                  color="error"
                >
                  Delete
                </LoadingButton>
              </Stack>
            ))}
          </ul>
        </Stack>
      </Container>
    </>
  );
}

export default Accounts;
