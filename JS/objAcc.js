accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
          ]
    },
    {
          acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossery',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
         ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    },
    {
         acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    }
]

// 1. total number of accounts-
console.log(`--------Total number of accounts:  ----------------`);

console.log(accounts.length);

// 2. print account number whose ac_type is savings-
console.log("--------Account number whose ac_type is savings----------------");

accounts.filter(account => account.ac_type == 'savings').forEach(account => console.log(account.acno));

// 3. print the balance of account number 1000-
console.log(`--------print the balance of account number 1000 :  -----------------`);

console.log(accounts.find(account => account.acno == 1000).balance);

// 4. print all gpay transactions-
console.log("--------All gpay transactions------------------");

accGpayTransactions = accounts.map(account => account.transaction).flat(Infinity).filter(accDetail => accDetail.mode == 'gpay');

console.log(accGpayTransactions);



// 5. print all transactions whose amount  > 5000-
console.log("--------All transactions whose amount  > 5000------------------");

accTransactions = accounts.map(account => account.transaction).flat(Infinity).filter(accDetail => accDetail.amount > 5000 );

console.log(accTransactions);

// 6. print credit transaction of account 1002 -
console.log("--------credit transaction of account 1002-----------------");

credit1002Transactions = accounts.map(account => account.transaction).flat(Infinity).filter(accDetail => accDetail.to == 1002);

console.log(credit1002Transactions);

// 7. print total credited amount to 1002 -
console.log(`-------total credited amount to 1002 : -------------`);

var totalCredit = 0;
totalCredit1002Transactions = accounts.map(account => account.transaction).flat(Infinity).filter(accDetail => accDetail.to == 1002).forEach(trans => totalCredit += trans.amount);

console.log(totalCredit);

// 8. print debit transaction of account 1002 -
console.log("-------debit transaction of account 1002-------------");

debit1002Transactions = accounts.filter(accDetail => accDetail.acno == 1002).map(account => account.transaction).flat(Infinity);
console.log(debit1002Transactions);

// 9. print total debited amount from 1002 -
console.log("-------debit amount from 1002-------------");

var totalDebit = 0;
totalDebit1002Transactions = accounts.filter(accDetail => accDetail.acno == 1002).map(account => account.transaction).flat(Infinity).forEach(trans => totalDebit += trans.amount);

console.log(totalDebit);

// 10. print transaction history of 1002 -
console.log("-------Transaction history of 1002-------------");

console.log(debit1002Transactions);
console.log(credit1002Transactions);


// 11. print current balance (balance+credit amount) of 1002


// 12. print highest balance account details
console.log("-------highest balance account details------------");