/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBudgetMonth = /* GraphQL */ `
  query GetBudgetMonth($id: ID!) {
    getBudgetMonth(id: $id) {
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
export const listBudgetMonths = /* GraphQL */ `
  query ListBudgetMonths(
    $filter: ModelBudgetMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBudgetGroup = /* GraphQL */ `
  query GetBudgetGroup($id: ID!) {
    getBudgetGroup(id: $id) {
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
export const listBudgetGroups = /* GraphQL */ `
  query ListBudgetGroups(
    $filter: ModelBudgetGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          nextToken
        }
        createdAt
        updatedAt
        budgetMonthBudgetGroupsId
        owner
      }
      nextToken
    }
  }
`;
export const getBudgetGroupItem = /* GraphQL */ `
  query GetBudgetGroupItem($id: ID!) {
    getBudgetGroupItem(id: $id) {
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
export const listBudgetGroupItems = /* GraphQL */ `
  query ListBudgetGroupItems(
    $filter: ModelBudgetGroupItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetGroupItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        budgetGroupItemTransactionsId
        bankAccountTransactionsId
        owner
      }
      nextToken
    }
  }
`;
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
      nextToken
    }
  }
`;
export const budgetByMonthId = /* GraphQL */ `
  query BudgetByMonthId(
    $monthId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBudgetMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    budgetByMonthId(
      monthId: $monthId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
