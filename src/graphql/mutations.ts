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
      createdAt
      updatedAt
      owner
    }
  }
`;
