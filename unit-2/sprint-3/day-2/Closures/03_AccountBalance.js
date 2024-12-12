function createBankAccount(balance){
    return {
        deposite: function(amount){
            if(amount > 0){
                return balance += amount;
            }else{
                return "balance should be greater than 0."
            }
        },
        withdraw: function(amount) {
            if(amount > 0 && amount <= balance){
                return balance -= amount;
            } else if(amount > balance){
                return "Insufficient balance.";
            } else{
                return "Amount should be greater than 0.";
            }
        },
        getBalance: function(){
            return balance;
        }
    };
}
const account = createBankAccount(100);
console.log(account.deposite(50));
console.log(account.withdraw(30));
console.log(account.getBalance());