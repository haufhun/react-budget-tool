import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Divider,
  CircularProgress,
  Button,
} from "@mui/material";
import { BudgetMonth } from "../API";
import { getCurrentBudget } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { LoadingButton } from "@mui/lab";
import BudgetGroupCard from "./BudgetGroupCard";
import BudgetMonthService from "../utils/BudgetMonthService";
import BudgetGroupService from "../utils/BudgetGroupService";
import moment from "moment";
import CondensedTransactionsCardTable from "./CondensedTransactionsCardTable";

function Budget() {
  const dispatch = useAppDispatch();
  const budget = useAppSelector((state) => state.app.currentBudget.budgetMonth);
  const isLoadingBudget = useAppSelector(
    (state) => state.app.currentBudget.fetchLoading
  );

  const [isCreateBudgetLoading, setIsCreateBudgetLoading] = useState(false);

  const monthId = moment().format("YYYY-MM");

  const refresh = () => {
    dispatch(getCurrentBudget(monthId));
  };

  useEffect(() => {
    refresh();
  }, []);

  const createNewBudget = async () => {
    setIsCreateBudgetLoading(true);
    await BudgetMonthService.createNewBudget(monthId);
    setIsCreateBudgetLoading(false);
    refresh();
  };

  if (isLoadingBudget) return <CircularProgress />;

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

  const resetBudget = async () => {
    await BudgetMonthService.resetBudget(budget.id, budget.monthId);
    refresh();
  };

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
            <BudgetGroupCard budgetGroup={budgetGroup!} />
          ))}

          <Button
            onClick={() => {
              BudgetGroupService.createBlankExpenseGroup(budget.id);
              refresh();
            }}
          >
            Add Group
          </Button>
        </Stack>

        <Button onClick={resetBudget} color="error">
          Reset Budget
        </Button>
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
