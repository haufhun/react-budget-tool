import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BudgetMonthMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BudgetGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BudgetGroupItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BankAccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BudgetMonth {
  readonly id: string;
  readonly date: string;
  readonly budgetGroups: (BudgetGroup | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BudgetMonth, BudgetMonthMetaData>);
  static copyOf(source: BudgetMonth, mutator: (draft: MutableModel<BudgetMonth, BudgetMonthMetaData>) => MutableModel<BudgetMonth, BudgetMonthMetaData> | void): BudgetMonth;
}

export declare class BudgetGroup {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly budgetGroupItems?: (BudgetGroupItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly budgetMonthBudgetGroupsId?: string | null;
  constructor(init: ModelInit<BudgetGroup, BudgetGroupMetaData>);
  static copyOf(source: BudgetGroup, mutator: (draft: MutableModel<BudgetGroup, BudgetGroupMetaData>) => MutableModel<BudgetGroup, BudgetGroupMetaData> | void): BudgetGroup;
}

export declare class BudgetGroupItem {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly amountBudgeted: number;
  readonly transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly budgetGroupBudgetGroupItemsId?: string | null;
  constructor(init: ModelInit<BudgetGroupItem, BudgetGroupItemMetaData>);
  static copyOf(source: BudgetGroupItem, mutator: (draft: MutableModel<BudgetGroupItem, BudgetGroupItemMetaData>) => MutableModel<BudgetGroupItem, BudgetGroupItemMetaData> | void): BudgetGroupItem;
}

export declare class Transaction {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly date: string;
  readonly amount: number;
  readonly account: BankAccount;
  readonly budgetGroupItem?: BudgetGroupItem | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}

export declare class BankAccount {
  readonly id: string;
  readonly name: string;
  readonly transactions: (Transaction | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BankAccount, BankAccountMetaData>);
  static copyOf(source: BankAccount, mutator: (draft: MutableModel<BankAccount, BankAccountMetaData>) => MutableModel<BankAccount, BankAccountMetaData> | void): BankAccount;
}