import { API, graphqlOperation } from "aws-amplify";
import {
  DeleteTransactionMutation,
  DeleteTransactionMutationVariables,
  Transaction,
} from "../API";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";

class TransactionService {
  async delete(id: string): Promise<Transaction> {
    const vars: DeleteTransactionMutationVariables = {
      input: { id },
    };

    const response = (await API.graphql(
      graphqlOperation(mutations.deleteTransaction, vars)
    )) as GraphQLResult<DeleteTransactionMutation>;

    if (response.errors) {
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }

    return response.data?.deleteTransaction! as Transaction;
  }
}

export default new TransactionService();
