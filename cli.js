const readline = require('readline')
const longestIncreasingSubsequence = require('./index.js')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = () => {
  console.log('\n---- enter array of numbers ----')
  rl.question('array:   ', string => {
    let array = string.match(/^[\d+\,]+$/) // to refactor
      ? string.split(",")
      : 'string'
    let lis = longestIncreasingSubsequence(array)
    console.log('===== longest increasing subsequence =====')
    console.log(`(☞ﾟヮﾟ)☞ [ ${lis} ]`)
    questions()
  })
}

questions()
