export const calculateTotalCashAmount = (cashList) => {
  let totalCashAmount = 0;
  cashList.forEach(cash => {
    if (cash.transactionType === 'deposit') {
      totalCashAmount += cash.amount;
    }
    else if (cash.transactionType === 'withdraw') {
      totalCashAmount -= cash.amount;
    }
  });
  return parseFloat(totalCashAmount.toFixed(2));
}