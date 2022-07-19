import { useEffect, useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { API, graphqlOperation } from "aws-amplify";
import {
  createCategory as createCategoryMutation,
  deleteCategory as deleteCategoryMutation,
} from "../graphql/mutations";
import {
  CreateCategoryMutationVariables,
  DeleteCategoryMutationVariables,
  ListCategoriesQuery,
} from "../API";
import { listCategories } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

function Categories() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState<any>([]);
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);
  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const createCategory = async () => {
    setIsCreateLoading(true);
    try {
      const input: CreateCategoryMutationVariables = {
        input: {
          name: categoryName,
        },
      };
      await API.graphql(graphqlOperation(createCategoryMutation, input));

      setCategoryName("");

      await refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsCreateLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    setIsDeleteLoading(true);
    try {
      const input: DeleteCategoryMutationVariables = {
        input: {
          id: id,
        },
      };
      await API.graphql(graphqlOperation(deleteCategoryMutation, input));

      await refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const refresh = async () => {
    setIsRefreshLoading(true);
    try {
      const response = (await API.graphql(
        graphqlOperation(listCategories)
      )) as GraphQLResult<ListCategoriesQuery>;
      const categories = response?.data?.listCategories?.items;

      setCategories(categories);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRefreshLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <Container>
        <Stack>
          <TextField
            label="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <LoadingButton onClick={createCategory} loading={isCreateLoading}>
            Create Category
          </LoadingButton>

          <br />

          <Typography variant="h5">Categories List</Typography>
          <LoadingButton onClick={refresh} loading={isRefreshLoading}>
            Refresh
          </LoadingButton>

          <ul>
            {categories.map((bankCategory: any) => (
              <Stack direction="row" justifyContent="space-between">
                <li>{bankCategory.name}</li>
                <LoadingButton
                  onClick={() => deleteCategory(bankCategory.id)}
                  loading={isDeleteLoading}
                  color="error"
                >
                  Delete
                </LoadingButton>
              </Stack>
            ))}
          </ul>
        </Stack>
      </Container>
    </>
  );
}

export default Categories;
