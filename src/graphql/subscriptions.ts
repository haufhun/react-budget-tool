/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBudgetMonth = /* GraphQL */ `
  subscription OnCreateBudgetMonth($owner: String) {
    onCreateBudgetMonth(owner: $owner) {
      id
      monthId
      budgetGroups {
        items {
          id
          sortId
          name
          type
          budgetGroupItems {
            items {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetMonthBudgetGroupsId
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
export const onUpdateBudgetMonth = /* GraphQL */ `
  subscription OnUpdateBudgetMonth($owner: String) {
    onUpdateBudgetMonth(owner: $owner) {
      id
      monthId
      budgetGroups {
        items {
          id
          sortId
          name
          type
          budgetGroupItems {
            items {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetMonthBudgetGroupsId
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
export const onDeleteBudgetMonth = /* GraphQL */ `
  subscription OnDeleteBudgetMonth($owner: String) {
    onDeleteBudgetMonth(owner: $owner) {
      id
      monthId
      budgetGroups {
        items {
          id
          sortId
          name
          type
          budgetGroupItems {
            items {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetMonthBudgetGroupsId
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
export const onCreateBudgetGroup = /* GraphQL */ `
  subscription OnCreateBudgetGroup($owner: String) {
    onCreateBudgetGroup(owner: $owner) {
      id
      sortId
      name
      type
      budgetGroupItems {
        items {
          id
          name
          type
          amountBudgeted
          transactions {
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
              budgetGroupItem {
                id
                name
                type
                amountBudgeted
                createdAt
                updatedAt
                budgetGroupBudgetGroupItemsId
                owner
              }
              createdAt
              updatedAt
              budgetGroupItemTransactionsId
              bankAccountTransactionsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetGroupBudgetGroupItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthBudgetGroupsId
      owner
    }
  }
`;
export const onUpdateBudgetGroup = /* GraphQL */ `
  subscription OnUpdateBudgetGroup($owner: String) {
    onUpdateBudgetGroup(owner: $owner) {
      id
      sortId
      name
      type
      budgetGroupItems {
        items {
          id
          name
          type
          amountBudgeted
          transactions {
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
              budgetGroupItem {
                id
                name
                type
                amountBudgeted
                createdAt
                updatedAt
                budgetGroupBudgetGroupItemsId
                owner
              }
              createdAt
              updatedAt
              budgetGroupItemTransactionsId
              bankAccountTransactionsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetGroupBudgetGroupItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthBudgetGroupsId
      owner
    }
  }
`;
export const onDeleteBudgetGroup = /* GraphQL */ `
  subscription OnDeleteBudgetGroup($owner: String) {
    onDeleteBudgetGroup(owner: $owner) {
      id
      sortId
      name
      type
      budgetGroupItems {
        items {
          id
          name
          type
          amountBudgeted
          transactions {
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
              budgetGroupItem {
                id
                name
                type
                amountBudgeted
                createdAt
                updatedAt
                budgetGroupBudgetGroupItemsId
                owner
              }
              createdAt
              updatedAt
              budgetGroupItemTransactionsId
              bankAccountTransactionsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          budgetGroupBudgetGroupItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetMonthBudgetGroupsId
      owner
    }
  }
`;
export const onCreateBudgetGroupItem = /* GraphQL */ `
  subscription OnCreateBudgetGroupItem($owner: String) {
    onCreateBudgetGroupItem(owner: $owner) {
      id
      name
      type
      amountBudgeted
      transactions {
        items {
          id
          name
          description
          date
          amount
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetGroupBudgetGroupItemsId
      owner
    }
  }
`;
export const onUpdateBudgetGroupItem = /* GraphQL */ `
  subscription OnUpdateBudgetGroupItem($owner: String) {
    onUpdateBudgetGroupItem(owner: $owner) {
      id
      name
      type
      amountBudgeted
      transactions {
        items {
          id
          name
          description
          date
          amount
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetGroupBudgetGroupItemsId
      owner
    }
  }
`;
export const onDeleteBudgetGroupItem = /* GraphQL */ `
  subscription OnDeleteBudgetGroupItem($owner: String) {
    onDeleteBudgetGroupItem(owner: $owner) {
      id
      name
      type
      amountBudgeted
      transactions {
        items {
          id
          name
          description
          date
          amount
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      budgetGroupBudgetGroupItemsId
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
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      budgetGroupItem {
        id
        name
        type
        amountBudgeted
        transactions {
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        budgetGroupBudgetGroupItemsId
        owner
      }
      createdAt
      updatedAt
      budgetGroupItemTransactionsId
      bankAccountTransactionsId
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
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      budgetGroupItem {
        id
        name
        type
        amountBudgeted
        transactions {
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        budgetGroupBudgetGroupItemsId
        owner
      }
      createdAt
      updatedAt
      budgetGroupItemTransactionsId
      bankAccountTransactionsId
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
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      budgetGroupItem {
        id
        name
        type
        amountBudgeted
        transactions {
          items {
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
            budgetGroupItem {
              id
              name
              type
              amountBudgeted
              transactions {
                nextToken
              }
              createdAt
              updatedAt
              budgetGroupBudgetGroupItemsId
              owner
            }
            createdAt
            updatedAt
            budgetGroupItemTransactionsId
            bankAccountTransactionsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        budgetGroupBudgetGroupItemsId
        owner
      }
      createdAt
      updatedAt
      budgetGroupItemTransactionsId
      bankAccountTransactionsId
      owner
    }
  }
`;
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
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
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
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
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
          account {
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
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          budgetGroupItem {
            id
            name
            type
            amountBudgeted
            transactions {
              items {
                id
                name
                description
                date
                amount
                createdAt
                updatedAt
                budgetGroupItemTransactionsId
                bankAccountTransactionsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            budgetGroupBudgetGroupItemsId
            owner
          }
          createdAt
          updatedAt
          budgetGroupItemTransactionsId
          bankAccountTransactionsId
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
