// Displays the balance with 8 decimals

const displayBalanceDecimals = (balance: number): string => {
  if (typeof balance === "number") {
    return (Math.round(balance * 100000000) / 100000000).toFixed(8);
  } else console.error(`Balance is not a number, it's ${typeof balance}.`);
};

export default displayBalanceDecimals;
