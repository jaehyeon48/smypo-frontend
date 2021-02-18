export const calculateTotalCashAmount = (cashList) => {
  let totalCashAmount = 0;
  cashList.forEach(cash => {
    if (cash.transactionType === 'deposit' || cash.transactionType === 'sold' ||
      cash.transactionType === 'dividend') {
      totalCashAmount += cash.amount;
    }
    else if (cash.transactionType === 'withdraw' || cash.transactionType === 'purchased') {
      totalCashAmount -= cash.amount;
    }
  });
  return parseFloat(totalCashAmount.toFixed(2));
}