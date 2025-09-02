function bankAccount() {
  let totalAmount = 1000;

  return {
    deposit(balance) {
      if (balance > 0) {
        totalAmount += balance;
        return totalAmount;
      } else {
        return "Invalid deposit amount!";
      }
    },

    withdraw(balance) {
      if (balance > 0 && balance <= totalAmount) {
        totalAmount -= balance;
        return totalAmount;
      } else {
        return "Insufficient balance or invalid amount!";
      }
    },
  };
}

const account = bankAccount();
// console.log(account.deposit(2000));
console.log(account.withdraw(500));
