const aFibo = (nNumber) => {
  const aNumbers = [0, 1];

  for (let i = 2; i < nNumber; i++) {
    aNumbers[i] = aNumbers[i - 1] + aNumbers[i - 2];
  }

  return aNumbers;
};

const fibo = aFibo(7);

console.log(fibo);
