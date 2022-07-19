/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBankAccount = /* GraphQL */ `
  query GetBankAccount($id: ID!) {
    getBankAccount(id: $id) {
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
export const listBankAccounts = /* GraphQL */ `
  query ListBankAccounts(
    $filter: ModelBankAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        transactions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
        transactions {
          nextToken
        }
        createdAt
        updatedAt
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        date
        amount
        account {
          id
          name
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        bankAccountTransactionsId
        categoryTransactionsId
        owner
      }
      nextToken
    }
  }
`;
