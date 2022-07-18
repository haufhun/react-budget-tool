import { useEffect, useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { API, graphqlOperation } from "aws-amplify";
import {
  createBankAccount as createBankAccountMutation,
  deleteBankAccount as deleteBankAccountMutation,
} from "../graphql/mutations";
import {
  CreateBankAccountMutationVariables,
  DeleteBankAccountMutationVariables,
  ListBankAccountsQuery,
} from "../API";
import { listBankAccounts } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

function Accounts() {
  const [accountName, setAccountName] = useState("");
  const [bankAccounts, setBankAccounts] = useState<any>([]);
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);
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

      await refresh();
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

      await refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const refresh = async () => {
    setIsRefreshLoading(true);
    try {
      const response = (await API.graphql(
        graphqlOperation(listBankAccounts)
      )) as GraphQLResult<ListBankAccountsQuery>;
      const accounts = response?.data?.listBankAccounts?.items;

      setBankAccounts(accounts);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRefreshLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

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
