import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  BudgetGroupItem,
  CreateBudgetGroupItemMutation,
  CreateBudgetGroupItemMutationVariables,
  DeleteBudgetGroupItemMutation,
  DeleteBudgetGroupItemMutationVariables,
  UpdateBudgetGroupItemInput,
  UpdateBudgetGroupItemMutation,
  UpdateBudgetGroupItemMutationVariables,
} from "../API";
import * as mutations from "../graphql/mutations";

class BudgetGroupItemItemService {
  async createBlankIncome(budgetGroupId: string): Promise<BudgetGroupItem> {
    return this.create(budgetGroupId, "Paycheck", "income", 0.0);
  }

  async createBlankExpense(budgetGroupId: string): Promise<BudgetGroupItem> {
    return this.create(budgetGroupId, "Label", "expense", 0.0);
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

  async update(input: UpdateBudgetGroupItemInput): Promise<BudgetGroupItem> {
    const vars: UpdateBudgetGroupItemMutationVariables = { input };
    const response = (await API.graphql(
      graphqlOperation(mutations.updateBudgetGroupItem, vars)
    )) as GraphQLResult<UpdateBudgetGroupItemMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.updateBudgetGroupItem! as BudgetGroupItem;
  }

  async delete(id: string): Promise<BudgetGroupItem> {
    const vars: DeleteBudgetGroupItemMutationVariables = {
      input: { id },
    };
    const response = (await API.graphql(
      graphqlOperation(mutations.deleteBudgetGroupItem, vars)
    )) as GraphQLResult<DeleteBudgetGroupItemMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.deleteBudgetGroupItem! as BudgetGroupItem;
  }
}

export default new BudgetGroupItemItemService();
