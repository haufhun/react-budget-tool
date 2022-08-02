import { BudgetGroupItem } from "../API";
import IncomeBudgetGroupItemRow from "./IncomeBudgetGroupItemRow";
import ExpenseBudgetGroupItemRow from "./ExpenseBudgetGroupItemRow";

type BudgetGroupItemRowProps = {
  budgetGroupItem: BudgetGroupItem;
};

function BudgetGroupItemRow({ budgetGroupItem }: BudgetGroupItemRowProps) {
  if (budgetGroupItem.type === "income")
    return <IncomeBudgetGroupItemRow budgetGroupItem={budgetGroupItem} />;

  return <ExpenseBudgetGroupItemRow budgetGroupItem={budgetGroupItem} />;
}

export default BudgetGroupItemRow;
