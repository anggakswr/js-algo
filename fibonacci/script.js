const aFibo = (n) => {
  const aNumbers = [0, 1];

  for (let i = 2; i < n; i++) {
    aNumbers[i] = aNumbers[i - 1] + aNumbers[i - 2];
  }

  return aNumbers;
};

console.log({ 1: aFibo(1), 7: aFibo(7) });

// big-o = O(n)
