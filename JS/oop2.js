class Bank{

    accountDetails = {

        1000: {acno:1000, username:"userone",password:"userone", balance:50000},

        1001: {acno:1001, username:"usertwo",password:"usertwo", balance:5000},

        1002: {acno:1002, username:"userthree",password:"userthree", balance:10000},

        1003: {acno:1003, username:"userfour",password:"userfour", balance:6000},

    }


    // validate account number function returns true/false

    validateAccount(acno){
        return this.accountDetails.hasOwnProperty(acno)
    }

    // authenticate account(acno,password)

    authAccount(acno, password1){
        if (this.validateAccount(acno)){
            if (password1 == this.accountDetails[acno].password){
                console.log("Authentication Successful");
            } else{
                console.log("Authentication Failed");
            }
        }else{
            console.log('Invalid account');
        }
    }

    // balance enquiry function

    balanceEnquiry(acno){
        if (this.validateAccount(acno)){
            console.log(`Current balance of ${acno} is : ${this.accountDetails[acno].balance}`);

        }else{
            console.log('Invalid account');
        }
    }


    // function for fund transfer(fromAcno, toAcno, amount)

    fundTransfer(fromAcno, toAcno, amount){
        if (this.validateAccount(fromAcno) && this.validateAccount(toAcno)){
            if (amount <= this.accountDetails[fromAcno].balance){

                console.log(`Before transfer balance of Account ${fromAcno} is ${this.accountDetails[fromAcno].balance} and of Account ${toAcno} is ${this.accountDetails[toAcno].balance}`);


                this.accountDetails[fromAcno].balance -= amount;
                this.accountDetails[toAcno].balance += amount;

                console.log("Fund Transfer Successful");

                console.log(`After transfer balance of Account ${fromAcno} is ${this.accountDetails[fromAcno].balance} and of Account ${toAcno} is ${this.accountDetails[toAcno].balance}`);
            } else{
                console.log("Insufficient Balance");
            }
        }else{
            console.log('Invalid credit or debit account');
        }
    }

}

const user = new Bank();
console.log(user.validateAccount(1000) ? "Valid account" : "Invalid account");
user.authAccount(1000,"userone")
user.balanceEnquiry(1002)
user.fundTransfer(1000, 1002, 5000)