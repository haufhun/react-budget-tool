/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type BankAccount = {
  __typename: "BankAccount",
  id: string,
  name: string,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
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
  category?: Category | null,
  createdAt: string,
  updatedAt: string,
  bankAccountTransactionsId: string,
  categoryTransactionsId?: string | null,
  owner?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateBankAccountInput = {
  id: string,
  name?: string | null,
};

export type DeleteBankAccountInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  name: string,
  description: string,
  date: string,
  amount: number,
  bankAccountTransactionsId: string,
  categoryTransactionsId?: string | null,
};

export type ModelTransactionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  bankAccountTransactionsId?: ModelIDInput | null,
  categoryTransactionsId?: ModelIDInput | null,
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

export type UpdateTransactionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  date?: string | null,
  amount?: number | null,
  bankAccountTransactionsId?: string | null,
  categoryTransactionsId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
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

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
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
  bankAccountTransactionsId?: ModelIDInput | null,
  categoryTransactionsId?: ModelIDInput | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
    owner?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bankAccountTransactionsId: string,
      categoryTransactionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
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
        createdAt: string,
        updatedAt: string,
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
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
        bankAccountTransactionsId: string,
        categoryTransactionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
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
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      transactions?:  {
        __typename: "ModelTransactionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bankAccountTransactionsId: string,
    categoryTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};
