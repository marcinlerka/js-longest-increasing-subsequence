const longestIncreasingSubsequence = require('./index.js')

const array = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16]
const lis = longestIncreasingSubsequence(array)

console.log(`
  find longest increasing subsequence for an Array:
  [${array}]

  RESULT:
  (☞ﾟヮﾟ)☞ [${lis}]
`)
