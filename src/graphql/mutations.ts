/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBankAccount = /* GraphQL */ `
  mutation CreateBankAccount(
    $input: CreateBankAccountInput!
    $condition: ModelBankAccountConditionInput
  ) {
    createBankAccount(input: $input, condition: $condition) {
      id
      name
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBankAccount = /* GraphQL */ `
  mutation UpdateBankAccount(
    $input: UpdateBankAccountInput!
    $condition: ModelBankAccountConditionInput
  ) {
    updateBankAccount(input: $input, condition: $condition) {
      id
      name
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBankAccount = /* GraphQL */ `
  mutation DeleteBankAccount(
    $input: DeleteBankAccountInput!
    $condition: ModelBankAccountConditionInput
  ) {
    deleteBankAccount(input: $input, condition: $condition) {
      id
      name
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBudgetMonth = /* GraphQL */ `
  mutation CreateBudgetMonth(
    $input: CreateBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    createBudgetMonth(input: $input, condition: $condition) {
      date
      categories {
        items {
          id
          name
          plannedAmount
          createdAt
          updatedAt
          budgetMonthCategoriesId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBudgetMonth = /* GraphQL */ `
  mutation UpdateBudgetMonth(
    $input: UpdateBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    updateBudgetMonth(input: $input, condition: $condition) {
      date
      categories {
        items {
          id
          name
          plannedAmount
          createdAt
          updatedAt
          budgetMonthCategoriesId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBudgetMonth = /* GraphQL */ `
  mutation DeleteBudgetMonth(
    $input: DeleteBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    deleteBudgetMonth(input: $input, condition: $condition) {
      date
      categories {
        items {
          id
          name
          plannedAmount
          createdAt
          updatedAt
          budgetMonthCategoriesId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      plannedAmount
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthCategoriesId
      owner
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      plannedAmount
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthCategoriesId
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      plannedAmount
      transactions {
        items {
          id
          name
          description
          date
          amount
          createdAt
          updatedAt
          bankAccountTransactionsId
          categoryTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthCategoriesId
      owner
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      name
      description
      date
      amount
      account {
        id
        name
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        plannedAmount
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        budgetMonthCategoriesId
        owner
      }
      createdAt
      updatedAt
      bankAccountTransactionsId
      categoryTransactionsId
      owner
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      name
      description
      date
      amount
      account {
        id
        name
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        plannedAmount
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        budgetMonthCategoriesId
        owner
      }
      createdAt
      updatedAt
      bankAccountTransactionsId
      categoryTransactionsId
      owner
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      name
      description
      date
      amount
      account {
        id
        name
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        plannedAmount
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        budgetMonthCategoriesId
        owner
      }
      createdAt
      updatedAt
      bankAccountTransactionsId
      categoryTransactionsId
      owner
    }
  }
`;
