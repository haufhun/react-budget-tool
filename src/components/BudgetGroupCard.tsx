import { Paper, Typography } from "@mui/material";
import { BudgetGroup } from "../API";
import ExpenseBudgetGroupCard from "./ExpenseBudgetGroupCard";
import IncomeBudgetGroupCard from "./IncomeBudgetGroupCard";

type BudgetGroupCardProps = {
  budgetGroup: BudgetGroup;
};

function BudgetGroupCard({ budgetGroup }: BudgetGroupCardProps) {
  if (!budgetGroup) {
    return (
      <>
        <Paper elevation={3} sx={{ paddingBottom: 2 }}>
          <Typography color="error">Error With This Budget Group</Typography>
        </Paper>
      </>
    );
  }

  const isExpense = budgetGroup.type === "expense";

  return isExpense ? (
    <ExpenseBudgetGroupCard budgetGroup={budgetGroup} />
  ) : (
    <IncomeBudgetGroupCard budgetGroup={budgetGroup} />
  );
}

export default BudgetGroupCard;
