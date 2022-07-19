/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBankAccount = /* GraphQL */ `
  subscription OnCreateBankAccount($owner: String) {
    onCreateBankAccount(owner: $owner) {
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
export const onUpdateBankAccount = /* GraphQL */ `
  subscription OnUpdateBankAccount($owner: String) {
    onUpdateBankAccount(owner: $owner) {
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
export const onDeleteBankAccount = /* GraphQL */ `
  subscription OnDeleteBankAccount($owner: String) {
    onDeleteBankAccount(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String) {
    onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String) {
    onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String) {
    onDeleteTransaction(owner: $owner) {
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
