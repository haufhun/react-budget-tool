import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import {
  BudgetByMonthIdQuery,
  BudgetByMonthIdQueryVariables,
  BudgetMonth,
  CreateBudgetMonthMutation,
  CreateBudgetMonthMutationVariables,
  DeleteBudgetMonthMutation,
  DeleteBudgetMonthMutationVariables,
} from "../API";
import moment from "moment";
import BudgetGroupService from "./BudgetGroupService";
import BudgetGroupItemService from "./BudgetGroupItemService";

class BudgetMonthService {
  private validateMonthId(monthId: string) {
    const parsed = monthId.split("-");
    if (parsed.length !== 2) throw new Error("Invalid monthId passed");

    if (parsed[0].length !== 4) throw new Error("Invalid monthId passed");

    if (parsed[1].length !== 2) throw new Error("Invalid monthId passed");

    if (!moment(monthId).isValid()) throw new Error("Invalid monthId passed");
  }

  async createNewBudget(monthId: string): Promise<void> {
    const budgetMonth = await this.create(monthId);
    await BudgetGroupService.create("Income", "income", "1", budgetMonth.id);
  }

  async resetBudget(budgetMonth: BudgetMonth): Promise<void> {
    const budgetGroups = budgetMonth.budgetGroups?.items ?? [];
    const budgetGroupPromises: unknown[] = [];
    const budgetGroupItemPromises: unknown[] = [];

    console.log("budget month:", budgetMonth.id);

    for (let bg of budgetGroups) {
      if (!bg) continue;

      const bgId = bg.id;
      console.log("budget group:", bgId, bg.name);

      budgetGroupPromises.push(() => BudgetGroupService.delete(bgId));

      const budgetGroupItems = bg.budgetGroupItems?.items ?? [];
      for (let bgi of budgetGroupItems) {
        if (!bgi) continue;

        const bgiId = bgi.id;
        console.log("budget group item:", bgiId, bgi.name, bg.name);

        budgetGroupItemPromises.push(() =>
          BudgetGroupItemService.delete(bgiId)
        );
      }
    }

    await Promise.all(budgetGroupItemPromises);
    await Promise.all(budgetGroupPromises);

    await this.delete(budgetMonth.id);
    await this.createNewBudget(budgetMonth.monthId);
  }

  private async create(monthId: string): Promise<BudgetMonth> {
    this.validateMonthId(monthId);

    const budgetVars: CreateBudgetMonthMutationVariables = {
      input: { monthId: monthId },
    };
    const response = (await API.graphql(
      graphqlOperation(mutations.createBudgetMonth, budgetVars)
    )) as GraphQLResult<CreateBudgetMonthMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.createBudgetMonth! as BudgetMonth;
  }

  async get(monthId: string): Promise<BudgetMonth> {
    this.validateMonthId(monthId);

    const vars: BudgetByMonthIdQueryVariables = {
      monthId: monthId,
    };
    const response = (await API.graphql(
      graphqlOperation(queries.budgetByMonthId, vars)
    )) as GraphQLResult<BudgetByMonthIdQuery>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    const fetchedBudgetItems = response.data?.budgetByMonthId?.items;
    if (
      !fetchedBudgetItems ||
      fetchedBudgetItems.length <= 0 ||
      !fetchedBudgetItems[0]
    ) {
      const message = "No Budget Found";
      console.error(message);
      throw new Error(message);
    }

    const fetchBudgetItem = fetchedBudgetItems[0];

    fetchBudgetItem.budgetGroups?.items.sort(
      (a, b) => parseInt(a?.sortId ?? "0") - parseInt(b?.sortId ?? "0")
    );

    return fetchBudgetItem as BudgetMonth;
  }

  async delete(id: string): Promise<BudgetMonth> {
    const vars: DeleteBudgetMonthMutationVariables = {
      input: { id },
    };
    const response = (await API.graphql(
      graphqlOperation(mutations.deleteBudgetMonth, vars)
    )) as GraphQLResult<DeleteBudgetMonthMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.deleteBudgetMonth! as BudgetMonth;
  }
}

export default new BudgetMonthService();
