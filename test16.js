// https://www.codewars.com/kata/593ff8b39e1cc4bae9000070/train/javascript

function lcs(x, y) {
  const m = x.length;
  const n = y.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(""));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (x[i - 1] === y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + x[i - 1];
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("", ""));
