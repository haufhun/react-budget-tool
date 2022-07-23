import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  BudgetGroup,
  CreateBudgetGroupMutation,
  CreateBudgetGroupMutationVariables,
  DeleteBudgetGroupMutationVariables,
  DeleteBudgetGroupMutation,
} from "../API";
import * as mutations from "../graphql/mutations";

class BudgetGroupService {
  async createBlankExpenseGroup(budgetMonthId) {
    this.create(budgetMonthId, "Untitled", "expense");
  }

  async create(
    budgetMonthId: string,
    name: string,
    type: string
  ): Promise<BudgetGroup> {
    const budgetGroupIncomeVars: CreateBudgetGroupMutationVariables = {
      input: {
        name: name,
        type: type,
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

    return response.data?.createBudgetGroup!;
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

    return response.data?.deleteBudgetGroup!;
  }
}

export default new BudgetGroupService();
