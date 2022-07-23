import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  BudgetGroupItem,
  CreateBudgetGroupItemMutation,
  CreateBudgetGroupItemMutationVariables,
} from "../API";
import * as mutations from "../graphql/mutations";

class BudgetGroupItemItemService {
  async createBlankIncome(budgetGroupId: string): Promise<BudgetGroupItem> {
    return await this.create(budgetGroupId, "Paycheck", "income", 0.0);
  }

  async create(
    budgetGroupId: string,
    name: string,
    type: string,
    amountBudgeted: number
  ): Promise<BudgetGroupItem> {
    const budgetGroupItemIncomeVars: CreateBudgetGroupItemMutationVariables = {
      input: {
        name: name,
        type: type,
        amountBudgeted: amountBudgeted,
        budgetGroupBudgetGroupItemsId: budgetGroupId,
      },
    };
    const response = (await API.graphql(
      graphqlOperation(
        mutations.createBudgetGroupItem,
        budgetGroupItemIncomeVars
      )
    )) as GraphQLResult<CreateBudgetGroupItemMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.createBudgetGroupItem! as BudgetGroupItem;
  }
}

export default new BudgetGroupItemItemService();
