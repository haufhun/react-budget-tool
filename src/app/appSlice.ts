import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api";
import {
  BankAccount,
  BudgetGroupItem,
  BudgetMonth,
  ListBankAccountsQuery,
  ListBankAccountsQueryVariables,
  ListTransactionsQuery,
  ListTransactionsQueryVariables,
  Transaction,
} from "../API";
import * as queries from "../graphql/queries";
import BudgetMonthService from "../utils/BudgetMonthService";

const initialState = {
  currentBudget: {
    fetchLoading: false,
    fetchError: null as any,
    budgetMonth: null as BudgetMonth | null,
    selectedBudgetGroupItem: null as BudgetGroupItem | null,
  },
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

export const getCurrentBudget = createAsyncThunk(
  "budgetMonth/getCurrent",
  (monthId: string) => BudgetMonthService.get(monthId)
);

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

    const newTransactions = response?.data?.listTransactions
      ?.items as Transaction[];

    newTransactions.sort((a, b) => {
      if (!a || !b) return 0;

      return b.date.localeCompare(a.date);
    });

    return newTransactions;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedBudgetGroupItem: (state, action) => {
      state.currentBudget.selectedBudgetGroupItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentBudget.pending, (state) => {
      state.currentBudget.fetchLoading = true;
    });
    builder.addCase(getCurrentBudget.rejected, (state, action) => {
      state.currentBudget.fetchLoading = false;
      state.currentBudget.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(getCurrentBudget.fulfilled, (state, action) => {
      state.currentBudget.fetchLoading = false;
      state.currentBudget.budgetMonth = action.payload;
    });

    builder.addCase(fetchTransactions.pending, (state) => {
      state.transactions.fetchLoading = true;
    });
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.transactions.fetchLoading = false;
      state.transactions.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions.fetchLoading = false;
      state.transactions.items = action.payload;
    });

    builder.addCase(fetchBankAccounts.pending, (state) => {
      state.bankAccounts.fetchLoading = true;
    });
    builder.addCase(fetchBankAccounts.rejected, (state, action) => {
      state.bankAccounts.fetchLoading = false;
      state.bankAccounts.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(fetchBankAccounts.fulfilled, (state, action) => {
      state.bankAccounts.fetchLoading = false;
      state.bankAccounts.items = action.payload;
    });
  },
});

export const { setSelectedBudgetGroupItem } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
