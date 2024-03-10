function listSquared(m, n) {
  const result = [];
  for (let num = m; num <= n; num++) {
    let divisorsSum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisorsSum += i * i;
        if (i !== num / i) {
          divisorsSum += (num / i) * (num / i);
        }
      }
    }

    if (Math.sqrt(divisorsSum) % 1 === 0) {
      result.push([num, divisorsSum]);
    }
  }
  return result;
}

// Output for listSquared(1, 250)
console.log(listSquared(1, 250));
