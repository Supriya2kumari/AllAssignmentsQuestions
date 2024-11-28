let bankAccount = {
    accountHolderName: "Supriya",
    balance: 1000,
    deposit: function(amount){
        this.balance = this.balance + amount;
        console.log(`New balance is ${this.balance}`);
    },
    withdraw: function(amount){
        if(amount > this.balance){
            console.log(`Insufficient balance`);
        } else {
            this.balance = this.balance - amount;
            console.log(`New balance is ${this.balance}`);
        }
    }
}

bankAccount.deposit(2000);
bankAccount.withdraw(1000);