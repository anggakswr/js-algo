const nFacto = (n) => {
  let nResult = 1;

  for (let i = 0; i < n; i++) {
    nResult *= n - i;
  }

  return nResult;
};

console.log({ 0: nFacto(0), 1: nFacto(1), 4: nFacto(4), 5: nFacto(5) });
