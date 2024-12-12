function createBankAccount(balance){
    return {
        deposite: function(amount){
            return balance += amount;
        },
        withdraw: function(amount) {
            return balance -= amount;
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