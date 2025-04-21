export const formatINR = (amount: number): string => {
  if (amount >= 10000000) {
    return (amount / 10000000).toFixed(1).replace(/\.0$/, '') + ' Cr';
  } else if (amount >= 100000) {
    return (amount / 100000).toFixed(1).replace(/\.0$/, '') + ' L';
  }
  return amount.toLocaleString('en-IN');
};
