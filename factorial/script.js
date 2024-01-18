const nFacto = (nNumber) => {
  let nResult = 1;

  for (let i = 0; i < nNumber; i++) {
    nResult *= nNumber - i;
  }

  return nResult;
};

const nResult0 = nFacto(0);
const nResult1 = nFacto(1);
const nResult4 = nFacto(4);
const nResult5 = nFacto(5);

console.log({ nResult0, nResult1, nResult4, nResult5 });
