/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBudgetMonthInput = {
  id?: string | null,
  monthId: string,
};

export type ModelBudgetMonthConditionInput = {
  monthId?: ModelIDInput | null,
  and?: Array< ModelBudgetMonthConditionInput | null > | null,
  or?: Array< ModelBudgetMonthConditionInput | null > | null,
  not?: ModelBudgetMonthConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type BudgetMonth = {
  __typename: "BudgetMonth",
  id: string,
  monthId: string,
  budgetGroups?: ModelBudgetGroupConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBudgetGroupConnection = {
  __typename: "ModelBudgetGroupConnection",
  items:  Array<BudgetGroup | null >,
  nextToken?: string | null,
};

export type BudgetGroup = {
  __typename: "BudgetGroup",
  id: string,
  sortId: string,
  name: string,
  type: string,
  budgetGroupItems?: ModelBudgetGroupItemConnection | null,
  createdAt: string,
  updatedAt: string,
  budgetMonthBudgetGroupsId: string,
  owner?: string | null,
};

export type ModelBudgetGroupItemConnection = {
  __typename: "ModelBudgetGroupItemConnection",
  items:  Array<BudgetGroupItem | null >,
  nextToken?: string | null,
};

export type BudgetGroupItem = {
  __typename: "BudgetGroupItem",
  id: string,
  name: string,
  type: string,
  amountBudgeted: number,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  budgetGroupBudgetGroupItemsId: string,
  owner?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  name: string,
  description: string,
  date: string,
  amount: number,
  account: BankAccount,
  budgetGroupItem?: BudgetGroupItem | null,
  createdAt: string,
  updatedAt: string,
  budgetGroupItemTransactionsId?: string | null,
  bankAccountTransactionsId: string,
  owner?: string | null,
};

export type BankAccount = {
  __typename: "BankAccount",
  id: string,
  name: string,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateBudgetMonthInput = {
  id: string,
  monthId?: string | null,
};

export type DeleteBudgetMonthInput = {
  id: string,
};

export type CreateBudgetGroupInput = {
  id?: string | null,
  sortId: string,
  name: string,
  type: string,
  budgetMonthBudgetGroupsId: string,
};

export type ModelBudgetGroupConditionInput = {
  sortId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelBudgetGroupConditionInput | null > | null,
  or?: Array< ModelBudgetGroupConditionInput | null > | null,
  not?: ModelBudgetGroupConditionInput | null,
  budgetMonthBudgetGroupsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBudgetGroupInput = {
  id: string,
  sortId?: string | null,
  name?: string | null,
  type?: string | null,
  budgetMonthBudgetGroupsId?: string | null,
};

export type DeleteBudgetGroupInput = {
  id: string,
};

export type CreateBudgetGroupItemInput = {
  id?: string | null,
  name: string,
  type: string,
  amountBudgeted: number,
  budgetGroupBudgetGroupItemsId: string,
};

export type ModelBudgetGroupItemConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  amountBudgeted?: ModelFloatInput | null,
  and?: Array< ModelBudgetGroupItemConditionInput | null > | null,
  or?: Array< ModelBudgetGroupItemConditionInput | null > | null,
  not?: ModelBudgetGroupItemConditionInput | null,
  budgetGroupBudgetGroupItemsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBudgetGroupItemInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  amountBudgeted?: number | null,
  budgetGroupBudgetGroupItemsId?: string | null,
};

export type DeleteBudgetGroupItemInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  name: string,
  description: string,
  date: string,
  amount: number,
  budgetGroupItemTransactionsId?: string | null,
  bankAccountTransactionsId: string,
};

export type ModelTransactionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  budgetGroupItemTransactionsId?: ModelIDInput | null,
  bankAccountTransactionsId?: ModelIDInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  date?: string | null,
  amount?: number | null,
  budgetGroupItemTransactionsId?: string | null,
  bankAccountTransactionsId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateBankAccountInput = {
  id?: string | null,
  name: string,
};

export type ModelBankAccountConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBankAccountConditionInput | null > | null,
  or?: Array< ModelBankAccountConditionInput | null > | null,
  not?: ModelBankAccountConditionInput | null,
};

export type UpdateBankAccountInput = {
  id: string,
  name?: string | null,
};

export type DeleteBankAccountInput = {
  id: string,
};

export type ModelBudgetMonthFilterInput = {
  id?: ModelIDInput | null,
  monthId?: ModelIDInput | null,
  and?: Array< ModelBudgetMonthFilterInput | null > | null,
  or?: Array< ModelBudgetMonthFilterInput | null > | null,
  not?: ModelBudgetMonthFilterInput | null,
};

export type ModelBudgetMonthConnection = {
  __typename: "ModelBudgetMonthConnection",
  items:  Array<BudgetMonth | null >,
  nextToken?: string | null,
};

export type ModelBudgetGroupFilterInput = {
  id?: ModelIDInput | null,
  sortId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelBudgetGroupFilterInput | null > | null,
  or?: Array< ModelBudgetGroupFilterInput | null > | null,
  not?: ModelBudgetGroupFilterInput | null,
  budgetMonthBudgetGroupsId?: ModelIDInput | null,
};

export type ModelBudgetGroupItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  amountBudgeted?: ModelFloatInput | null,
  and?: Array< ModelBudgetGroupItemFilterInput | null > | null,
  or?: Array< ModelBudgetGroupItemFilterInput | null > | null,
  not?: ModelBudgetGroupItemFilterInput | null,
  budgetGroupBudgetGroupItemsId?: ModelIDInput | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
  budgetGroupItemTransactionsId?: ModelIDInput | null,
  bankAccountTransactionsId?: ModelIDInput | null,
};

export type ModelBankAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBankAccountFilterInput | null > | null,
  or?: Array< ModelBankAccountFilterInput | null > | null,
  not?: ModelBankAccountFilterInput | null,
};

export type ModelBankAccountConnection = {
  __typename: "ModelBankAccountConnection",
  items:  Array<BankAccount | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateBudgetMonthMutationVariables = {
  input: CreateBudgetMonthInput,
  condition?: ModelBudgetMonthConditionInput | null,
};

export type CreateBudgetMonthMutation = {
  createBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBudgetMonthMutationVariables = {
  input: UpdateBudgetMonthInput,
  condition?: ModelBudgetMonthConditionInput | null,
};

export type UpdateBudgetMonthMutation = {
  updateBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBudgetMonthMutationVariables = {
  input: DeleteBudgetMonthInput,
  condition?: ModelBudgetMonthConditionInput | null,
};

export type DeleteBudgetMonthMutation = {
  deleteBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBudgetGroupMutationVariables = {
  input: CreateBudgetGroupInput,
  condition?: ModelBudgetGroupConditionInput | null,
};

export type CreateBudgetGroupMutation = {
  createBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type UpdateBudgetGroupMutationVariables = {
  input: UpdateBudgetGroupInput,
  condition?: ModelBudgetGroupConditionInput | null,
};

export type UpdateBudgetGroupMutation = {
  updateBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type DeleteBudgetGroupMutationVariables = {
  input: DeleteBudgetGroupInput,
  condition?: ModelBudgetGroupConditionInput | null,
};

export type DeleteBudgetGroupMutation = {
  deleteBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type CreateBudgetGroupItemMutationVariables = {
  input: CreateBudgetGroupItemInput,
  condition?: ModelBudgetGroupItemConditionInput | null,
};

export type CreateBudgetGroupItemMutation = {
  createBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type UpdateBudgetGroupItemMutationVariables = {
  input: UpdateBudgetGroupItemInput,
  condition?: ModelBudgetGroupItemConditionInput | null,
};

export type UpdateBudgetGroupItemMutation = {
  updateBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type DeleteBudgetGroupItemMutationVariables = {
  input: DeleteBudgetGroupItemInput,
  condition?: ModelBudgetGroupItemConditionInput | null,
};

export type DeleteBudgetGroupItemMutation = {
  deleteBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type CreateBankAccountMutationVariables = {
  input: CreateBankAccountInput,
  condition?: ModelBankAccountConditionInput | null,
};

export type CreateBankAccountMutation = {
  createBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBankAccountMutationVariables = {
  input: UpdateBankAccountInput,
  condition?: ModelBankAccountConditionInput | null,
};

export type UpdateBankAccountMutation = {
  updateBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBankAccountMutationVariables = {
  input: DeleteBankAccountInput,
  condition?: ModelBankAccountConditionInput | null,
};

export type DeleteBankAccountMutation = {
  deleteBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetBudgetMonthQueryVariables = {
  id: string,
};

export type GetBudgetMonthQuery = {
  getBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBudgetMonthsQueryVariables = {
  filter?: ModelBudgetMonthFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBudgetMonthsQuery = {
  listBudgetMonths?:  {
    __typename: "ModelBudgetMonthConnection",
    items:  Array< {
      __typename: "BudgetMonth",
      id: string,
      monthId: string,
      budgetGroups?:  {
        __typename: "ModelBudgetGroupConnection",
        items:  Array< {
          __typename: "BudgetGroup",
          id: string,
          sortId: string,
          name: string,
          type: string,
          budgetGroupItems?:  {
            __typename: "ModelBudgetGroupItemConnection",
            items:  Array< {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetMonthBudgetGroupsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBudgetGroupQueryVariables = {
  id: string,
};

export type GetBudgetGroupQuery = {
  getBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type ListBudgetGroupsQueryVariables = {
  filter?: ModelBudgetGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBudgetGroupsQuery = {
  listBudgetGroups?:  {
    __typename: "ModelBudgetGroupConnection",
    items:  Array< {
      __typename: "BudgetGroup",
      id: string,
      sortId: string,
      name: string,
      type: string,
      budgetGroupItems?:  {
        __typename: "ModelBudgetGroupItemConnection",
        items:  Array< {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetMonthBudgetGroupsId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBudgetGroupItemQueryVariables = {
  id: string,
};

export type GetBudgetGroupItemQuery = {
  getBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type ListBudgetGroupItemsQueryVariables = {
  filter?: ModelBudgetGroupItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBudgetGroupItemsQuery = {
  listBudgetGroupItems?:  {
    __typename: "ModelBudgetGroupItemConnection",
    items:  Array< {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      name: string,
      description: string,
      date: string,
      amount: number,
      account:  {
        __typename: "BankAccount",
        id: string,
        name: string,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      budgetGroupItem?:  {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupItemTransactionsId?: string | null,
      bankAccountTransactionsId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBankAccountQueryVariables = {
  id: string,
};

export type GetBankAccountQuery = {
  getBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBankAccountsQueryVariables = {
  filter?: ModelBankAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankAccountsQuery = {
  listBankAccounts?:  {
    __typename: "ModelBankAccountConnection",
    items:  Array< {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BudgetByMonthIdQueryVariables = {
  monthId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBudgetMonthFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BudgetByMonthIdQuery = {
  budgetByMonthId?:  {
    __typename: "ModelBudgetMonthConnection",
    items:  Array< {
      __typename: "BudgetMonth",
      id: string,
      monthId: string,
      budgetGroups?:  {
        __typename: "ModelBudgetGroupConnection",
        items:  Array< {
          __typename: "BudgetGroup",
          id: string,
          sortId: string,
          name: string,
          type: string,
          budgetGroupItems?:  {
            __typename: "ModelBudgetGroupItemConnection",
            items:  Array< {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetMonthBudgetGroupsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBudgetMonthSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBudgetMonthSubscription = {
  onCreateBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBudgetMonthSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBudgetMonthSubscription = {
  onUpdateBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBudgetMonthSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBudgetMonthSubscription = {
  onDeleteBudgetMonth?:  {
    __typename: "BudgetMonth",
    id: string,
    monthId: string,
    budgetGroups?:  {
      __typename: "ModelBudgetGroupConnection",
      items:  Array< {
        __typename: "BudgetGroup",
        id: string,
        sortId: string,
        name: string,
        type: string,
        budgetGroupItems?:  {
          __typename: "ModelBudgetGroupItemConnection",
          items:  Array< {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetMonthBudgetGroupsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBudgetGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBudgetGroupSubscription = {
  onCreateBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBudgetGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBudgetGroupSubscription = {
  onUpdateBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBudgetGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBudgetGroupSubscription = {
  onDeleteBudgetGroup?:  {
    __typename: "BudgetGroup",
    id: string,
    sortId: string,
    name: string,
    type: string,
    budgetGroupItems?:  {
      __typename: "ModelBudgetGroupItemConnection",
      items:  Array< {
        __typename: "BudgetGroupItem",
        id: string,
        name: string,
        type: string,
        amountBudgeted: number,
        transactions?:  {
          __typename: "ModelTransactionConnection",
          items:  Array< {
            __typename: "Transaction",
            id: string,
            name: string,
            description: string,
            date: string,
            amount: number,
            account:  {
              __typename: "BankAccount",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
            },
            budgetGroupItem?:  {
              __typename: "BudgetGroupItem",
              id: string,
              name: string,
              type: string,
              amountBudgeted: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupBudgetGroupItemsId: string,
              owner?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupItemTransactionsId?: string | null,
            bankAccountTransactionsId: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupBudgetGroupItemsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetMonthBudgetGroupsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBudgetGroupItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBudgetGroupItemSubscription = {
  onCreateBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBudgetGroupItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBudgetGroupItemSubscription = {
  onUpdateBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBudgetGroupItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBudgetGroupItemSubscription = {
  onDeleteBudgetGroupItem?:  {
    __typename: "BudgetGroupItem",
    id: string,
    name: string,
    type: string,
    amountBudgeted: number,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupBudgetGroupItemsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    name: string,
    description: string,
    date: string,
    amount: number,
    account:  {
      __typename: "BankAccount",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    budgetGroupItem?:  {
      __typename: "BudgetGroupItem",
      id: string,
      name: string,
      type: string,
      amountBudgeted: number,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        items:  Array< {
          __typename: "Transaction",
          id: string,
          name: string,
          description: string,
          date: string,
          amount: number,
          account:  {
            __typename: "BankAccount",
            id: string,
            name: string,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          budgetGroupItem?:  {
            __typename: "BudgetGroupItem",
            id: string,
            name: string,
            type: string,
            amountBudgeted: number,
            transactions?:  {
              __typename: "ModelTransactionConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
            budgetGroupBudgetGroupItemsId: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupItemTransactionsId?: string | null,
          bankAccountTransactionsId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      budgetGroupBudgetGroupItemsId: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    budgetGroupItemTransactionsId?: string | null,
    bankAccountTransactionsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBankAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBankAccountSubscription = {
  onCreateBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBankAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBankAccountSubscription = {
  onUpdateBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBankAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBankAccountSubscription = {
  onDeleteBankAccount?:  {
    __typename: "BankAccount",
    id: string,
    name: string,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      items:  Array< {
        __typename: "Transaction",
        id: string,
        name: string,
        description: string,
        date: string,
        amount: number,
        account:  {
          __typename: "BankAccount",
          id: string,
          name: string,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        budgetGroupItem?:  {
          __typename: "BudgetGroupItem",
          id: string,
          name: string,
          type: string,
          amountBudgeted: number,
          transactions?:  {
            __typename: "ModelTransactionConnection",
            items:  Array< {
              __typename: "Transaction",
              id: string,
              name: string,
              description: string,
              date: string,
              amount: number,
              createdAt: string,
              updatedAt: string,
              budgetGroupItemTransactionsId?: string | null,
              bankAccountTransactionsId: string,
              owner?: string | null,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          budgetGroupBudgetGroupItemsId: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        budgetGroupItemTransactionsId?: string | null,
        bankAccountTransactionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
