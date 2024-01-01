export class Transaction implements ITransaction
{
    transactionID! : number;

    personID! : number;

    date! : Date;

    transactionType! : string;

    //reference number will be used to confirm the transaction from external systems
    transactionReferenceNumber! : string;

    transactionReason! : string;

    accountNumber! : string;

}

export interface ITransaction
{
    transactionID : number;

    personID : number;

    date : Date;

    transactionType : string;

    //reference number will be used to confirm the transaction from external systems
    transactionReferenceNumber : string;

    transactionReason : string;

    accountNumber : string;

}