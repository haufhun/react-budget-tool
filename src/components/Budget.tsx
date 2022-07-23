import { useEffect, useState } from "react";
import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import {
  BudgetMonth,
  CreateBudgetGroupMutationVariables,
  CreateBudgetMonthMutation,
  CreateBudgetMonthMutationVariables,
  GetBudgetMonthQuery,
  GetBudgetMonthQueryVariables,
  Transaction,
} from "../API";
import { fetchTransactions } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  createBudgetMonth as createBudgetMonthMutation,
  createBudgetGroup as createBudgetGroupMutation,
} from "../graphql/mutations";
import BudgetGroupItemRow from "./BudgetGroupItemRow";
import TransactionCard from "./TransactionCard";
import { LoadingButton } from "@mui/lab";
import { getBudgetMonth } from "../graphql/queries";

const CondensedTransactionsCardTable = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state: RootState) => state.app.transactions.items
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

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
};

function Budget() {
  const dispatch = useAppDispatch();
  const [isCreateBudgetLoading, setIsCreateBudgetLoading] = useState(false);
  const [isFetchBudgetLoading, setIsFetchBudgetLoading] = useState(false);

  const [budget, setBudget] = useState<BudgetMonth | null>(null);

  const refresh = async () => {
    setIsFetchBudgetLoading(true);

    const vars: GetBudgetMonthQueryVariables = {
      id: "2022-07-01",
    };
    const budgetMonthResponse = (await API.graphql(
      graphqlOperation(getBudgetMonth, vars)
    )) as GraphQLResult<GetBudgetMonthQuery>;
    setBudget(budgetMonthResponse.data?.getBudgetMonth as BudgetMonth);

    setIsFetchBudgetLoading(false);
  };

  useEffect(() => {
    refresh();
    dispatch(fetchTransactions());
  }, []);

  const createNewBudget = async () => {
    setIsCreateBudgetLoading(true);

    const budgetVars: CreateBudgetMonthMutationVariables = {
      input: {
        id: "2022-07-01",
        date: "2022-07-01",
        // budgetGroups: {

        // }
      },
    };
    const budgetMonthResponse = (await API.graphql(
      graphqlOperation(createBudgetMonthMutation, budgetVars)
    )) as GraphQLResult<CreateBudgetMonthMutation>;

    const budgetMonthId = budgetMonthResponse.data?.createBudgetMonth?.id!;

    const budgetGroupIncomeVars: CreateBudgetGroupMutationVariables = {
      input: {
        name: "Income",
        type: "income",
        budgetMonthBudgetGroupsId: budgetMonthId,
      },
    };
    await API.graphql(
      graphqlOperation(createBudgetGroupMutation, budgetGroupIncomeVars)
    );

    setIsCreateBudgetLoading(false);
  };

  if (isFetchBudgetLoading) return <CircularProgress />;

  if (!!!budget) {
    return (
      <>
        <Stack paddingLeft={5}>
          <Stack paddingBottom={3}>
            <Typography variant="h4">July 2022</Typography>

            <Divider sx={{ borderBottomWidth: 2, marginY: 1 }} />
          </Stack>

          <Typography textAlign="center" variant="h5">
            No Budget Created. Create One?
          </Typography>
          <LoadingButton
            loading={isCreateBudgetLoading}
            onClick={createNewBudget}
          >
            Create Budget
          </LoadingButton>
        </Stack>
      </>
    );
  }

  return (
    <Stack direction="row" height="100vh" bgcolor="#f5f7f8">
      <Stack
        sx={{
          width: "60%",
          paddingX: 2,
        }}
      >
        <Stack paddingLeft={5} paddingBottom={3}>
          <Typography variant="h4">July 2022</Typography>
          <Typography>Budget Good?</Typography>
          <Divider sx={{ borderBottomWidth: 2, marginY: 1 }} />
        </Stack>

        <Stack spacing={2} sx={{ width: "720px", margin: "0 auto" }}>
          {budget.budgetGroups?.items.map((budgetGroup) => (
            <>
              <Paper elevation={3}>
                {!budgetGroup && (
                  <Typography>Error With This Budget Group</Typography>
                )}

                {!!budgetGroup && (
                  <Stack>
                    <Stack
                      direction="row"
                      sx={{
                        paddingX: 2,
                        paddingY: 2,
                      }}
                    >
                      <Typography flex={7} textAlign="left">
                        {budgetGroup.name}
                      </Typography>
                      <Typography flex={2} textAlign="right">
                        Planned
                      </Typography>
                    </Stack>

                    {budgetGroup?.budgetGroupItems?.items.map(
                      (budgetGroupItem) => (
                        <BudgetGroupItemRow
                          budgetGroupItem={budgetGroupItem!}
                        />
                      )
                    )}
                    <Button>Add Item</Button>
                  </Stack>
                )}
              </Paper>
            </>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ width: "40%", height: "100vh" }}>
        <Container>
          <CondensedTransactionsCardTable />
        </Container>
      </Box>
    </Stack>
  );
}

export default Budget;
