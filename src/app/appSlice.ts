import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";
import {
  Category,
  ListCategoriesQuery,
  ListCategoriesQueryVariables,
} from "../API";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { RootState } from "./store";

const initialState = {
  categories: {
    fetchLoading: false,
    fetchError: null as any,
    items: [] as Category[],
  },
};

export const fetchCategories = createAsyncThunk("audios/fetchAll", async () => {
  const vars: ListCategoriesQueryVariables = { limit: 1000 };

  const response = (await API.graphql(
    graphqlOperation(queries.listCategories, vars)
  )) as GraphQLResult<ListCategoriesQuery>;
  if (response.errors) {
    throw new Error(JSON.stringify(response.errors[0]));
  }
  return response?.data?.listCategories?.items as Category[];
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories.fetchLoading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.categories.fetchError = action.payload ?? "Unknown Error";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories.items = action.payload;
    });
  },
});

const appReducer = appSlice.reducer;
export default appReducer;
