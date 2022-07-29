/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBudgetMonth = /* GraphQL */ `
  mutation CreateBudgetMonth(
    $input: CreateBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    createBudgetMonth(input: $input, condition: $condition) {
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
export const updateBudgetMonth = /* GraphQL */ `
  mutation UpdateBudgetMonth(
    $input: UpdateBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    updateBudgetMonth(input: $input, condition: $condition) {
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
export const deleteBudgetMonth = /* GraphQL */ `
  mutation DeleteBudgetMonth(
    $input: DeleteBudgetMonthInput!
    $condition: ModelBudgetMonthConditionInput
  ) {
    deleteBudgetMonth(input: $input, condition: $condition) {
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
export const createBudgetGroup = /* GraphQL */ `
  mutation CreateBudgetGroup(
    $input: CreateBudgetGroupInput!
    $condition: ModelBudgetGroupConditionInput
  ) {
    createBudgetGroup(input: $input, condition: $condition) {
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
export const updateBudgetGroup = /* GraphQL */ `
  mutation UpdateBudgetGroup(
    $input: UpdateBudgetGroupInput!
    $condition: ModelBudgetGroupConditionInput
  ) {
    updateBudgetGroup(input: $input, condition: $condition) {
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
export const deleteBudgetGroup = /* GraphQL */ `
  mutation DeleteBudgetGroup(
    $input: DeleteBudgetGroupInput!
    $condition: ModelBudgetGroupConditionInput
  ) {
    deleteBudgetGroup(input: $input, condition: $condition) {
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
export const createBudgetGroupItem = /* GraphQL */ `
  mutation CreateBudgetGroupItem(
    $input: CreateBudgetGroupItemInput!
    $condition: ModelBudgetGroupItemConditionInput
  ) {
    createBudgetGroupItem(input: $input, condition: $condition) {
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
export const updateBudgetGroupItem = /* GraphQL */ `
  mutation UpdateBudgetGroupItem(
    $input: UpdateBudgetGroupItemInput!
    $condition: ModelBudgetGroupItemConditionInput
  ) {
    updateBudgetGroupItem(input: $input, condition: $condition) {
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
export const deleteBudgetGroupItem = /* GraphQL */ `
  mutation DeleteBudgetGroupItem(
    $input: DeleteBudgetGroupItemInput!
    $condition: ModelBudgetGroupItemConditionInput
  ) {
    deleteBudgetGroupItem(input: $input, condition: $condition) {
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
