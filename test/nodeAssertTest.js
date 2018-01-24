const assert = require('assert')
const lis = require('../lib/lis.js')

const expectedResult = () => {
  const input = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16]
  const output = lis(input)
  const expected = [1, 3, 7, 10, 12, 16]
  assert.deepEqual(output, expected, `should get Longest Increasing Subsequence of an Array`)
}

const expectedResult2 = () => {
  const input = [3, 2, 1, 4, 6, 8, 15, 11, 21]
  const output = lis(input)
  const expected = [1, 4, 6, 8, 11, 21]
  assert.deepEqual(output, expected, `should get Longest Increasing Subsequence of an Array`)
}

expectedResult()
expectedResult2()

console.log('All tests passed.')
