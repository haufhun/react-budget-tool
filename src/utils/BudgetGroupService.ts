import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  BudgetGroup,
  CreateBudgetGroupMutation,
  CreateBudgetGroupMutationVariables,
  DeleteBudgetGroupMutationVariables,
  DeleteBudgetGroupMutation,
  UpdateBudgetGroupInput,
  UpdateBankAccountMutationVariables,
  UpdateBudgetGroupMutation,
} from "../API";
import { store } from "../app/store";
import * as mutations from "../graphql/mutations";

class BudgetGroupService {
  async createBlankExpenseGroup(budgetMonthId): Promise<BudgetGroup> {
    const state = store.getState();
    const budgetGroupsLength =
      state.app.currentBudget.budgetMonth?.budgetGroups?.items.length ?? -1000;

    const nextSortId = budgetGroupsLength + 1;

    return this.create(
      "Untitled",
      "expense",
      nextSortId.toString(),
      budgetMonthId
    );
  }

  async create(
    name: string,
    type: string,
    sortId: string,
    budgetMonthId: string
  ): Promise<BudgetGroup> {
    const budgetGroupIncomeVars: CreateBudgetGroupMutationVariables = {
      input: {
        name,
        type,
        sortId,
        budgetMonthBudgetGroupsId: budgetMonthId,
      },
    };
    const response = (await API.graphql(
      graphqlOperation(mutations.createBudgetGroup, budgetGroupIncomeVars)
    )) as GraphQLResult<CreateBudgetGroupMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.createBudgetGroup! as BudgetGroup;
  }

  async update(input: UpdateBudgetGroupInput): Promise<BudgetGroup> {
    const vars: UpdateBankAccountMutationVariables = { input };

    const response = (await API.graphql(
      graphqlOperation(mutations.updateBudgetGroup, vars)
    )) as GraphQLResult<UpdateBudgetGroupMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.updateBudgetGroup! as BudgetGroup;
  }

  async delete(id: string): Promise<BudgetGroup> {
    const vars: DeleteBudgetGroupMutationVariables = { input: { id } };

    const response = (await API.graphql(
      graphqlOperation(mutations.deleteBudgetGroup, vars)
    )) as GraphQLResult<DeleteBudgetGroupMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.deleteBudgetGroup! as BudgetGroup;
  }
}

export default new BudgetGroupService();
