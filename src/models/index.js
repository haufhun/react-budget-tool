// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BudgetMonth, BudgetGroup, BudgetGroupItem, Transaction, BankAccount } = initSchema(schema);

export {
  BudgetMonth,
  BudgetGroup,
  BudgetGroupItem,
  Transaction,
  BankAccount
};