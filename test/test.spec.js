const chai = require('chai')
const expect = chai.expect

const longestIncreasingSubsequence = require('../lib/lis.js')

describe('Longest increasing subsequence', () => {
  it('should generate longest increasing subsequence for an Array', () => {
    const input = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16]
    const output = longestIncreasingSubsequence(input)
    const expected = [1, 3, 7, 10, 12, 16]
    return expect(output).to.deep.equal(expected)
  })

  it('should return Array', () => {
    const input = [1, 3, 2, 8, 10]
    const output = longestIncreasingSubsequence(input)
    return expect(output).to.be.an('Array')
  })

  it('should throw TypeError for other data types', () => {
    const input = "some string"
    return expect(() => {longestIncreasingSubsequence(input)}).to.throw(TypeError)
  })
})
