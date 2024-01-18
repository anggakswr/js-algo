const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  // i < n is enough
  // but i < Math.sqrt(n) is more optimal
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log({
  1: isPrime(1),
  4: isPrime(4),
  7: isPrime(7),
});

// big-o = O(n)
// or
// big-o = O(sqrt(n))

// sqrt means akar in Indonesia
