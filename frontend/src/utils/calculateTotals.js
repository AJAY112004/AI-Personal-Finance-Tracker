export const calculateIncome = (
  transactions
) => {
  return transactions
    .filter(
      (item) =>
        item.type === "income"
    )
    .reduce(
      (total, item) =>
        total + item.amount,
      0
    );
};

export const calculateExpenses = (
  transactions
) => {
  return transactions
    .filter(
      (item) =>
        item.type === "expense"
    )
    .reduce(
      (total, item) =>
        total + item.amount,
      0
    );
};

export const calculateBalance = (
  transactions
) => {
  return (
    calculateIncome(
      transactions
    ) -
    calculateExpenses(
      transactions
    )
  );
};

export const calculateSavingsRate = (
  income,
  expenses
) => {
  if (income === 0) return 0;

  return (
    ((income - expenses) /
      income) *
    100
  ).toFixed(2);
};