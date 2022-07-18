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

export type ModelBankAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBankAccountFilterInput | null > | null,
  or?: Array< ModelBankAccountFilterInput | null > | null,
  not?: ModelBankAccountFilterInput | null,
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

export type ModelBankAccountConnection = {
  __typename: "ModelBankAccountConnection",
  items:  Array<BankAccount | null >,
  nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
