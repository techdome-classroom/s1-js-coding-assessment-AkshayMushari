const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      } else {
          break;
      }
  }

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
              dp[i][j] = dp[i - 1][j - 1];
          } else if (p[j - 1] === '*') {
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          }
      }
  }

  return dp[m][n];
};

module.exports = decodeTheRing;
