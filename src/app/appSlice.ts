import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api";
import {
  BankAccount,
  ListBankAccountsQuery,
  ListBankAccountsQueryVariables,
  ListTransactionsQuery,
  ListTransactionsQueryVariables,
  Transaction,
} from "../API";
import * as queries from "../graphql/queries";

const initialState = {
  transactions: {
    fetchLoading: false,
    fetchError: null as any,
    items: [] as Transaction[],
  },
  bankAccounts: {
    fetchLoading: false,
    fetchError: null as any,
    items: [] as BankAccount[],
  },
};

export const fetchBankAccounts = createAsyncThunk(
  "bankAccounts/fetchAll",
  async () => {
    const vars: ListBankAccountsQueryVariables = { limit: 1000 };

    const response = (await API.graphql(
      graphqlOperation(queries.listBankAccounts, vars)
    )) as GraphQLResult<ListBankAccountsQuery>;
    if (response.errors) {
      console.log("Error fetching transactions");
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }
    return response?.data?.listBankAccounts?.items as BankAccount[];
  }
);

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async () => {
    const vars: ListTransactionsQueryVariables = { limit: 1000 };

    const response = (await API.graphql(
      graphqlOperation(queries.listTransactions, vars)
    )) as GraphQLResult<ListTransactionsQuery>;
    if (response.errors) {
      console.log("Error fetching transactions");
      console.error(response.errors);
      throw new Error(JSON.stringify(response.errors));
    }
    return response?.data?.listTransactions?.items as Transaction[];
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
      state.transactions.fetchLoading = true;
    });
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.transactions.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions.items = action.payload;
    });
    builder.addCase(fetchBankAccounts.pending, (state) => {
      state.bankAccounts.fetchLoading = true;
    });
    builder.addCase(fetchBankAccounts.rejected, (state, action) => {
      state.bankAccounts.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(fetchBankAccounts.fulfilled, (state, action) => {
      state.bankAccounts.items = action.payload;
    });
  },
});

const appReducer = appSlice.reducer;
export default appReducer;
