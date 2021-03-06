module.exports = longestIncreasingSubsequence

function longestIncreasingSubsequence (array) {
  if (!Array.isArray(array)) throw new TypeError('function argument should be an Array')

  const findSequence = (array) => {
    let index = 0
    let sequencePositions = [index]
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[sequencePositions[index]]) {
        for (let j = 0; j <= index; j++) {
          if (array[i] < array[sequencePositions[j]] && (!j || array[i] > array[sequencePositions[j - 1]])) {
            sequencePositions[j] = i
            break
          }
        }
      } else if (array[i] > array[sequencePositions[index]] || (array[i] === array[sequencePositions[index]])) {
        sequencePositions[++index] = i
      }
    }
    return sequencePositions
  }

  const createSequenceArray = (array, sequencePositions) => {
    let index = sequencePositions.length - 1
    let longestIncreasingSubsequence = []
    longestIncreasingSubsequence[index] = array[sequencePositions[index]]
    for (let i = index - 1; i >= 0; i--) {
      if (sequencePositions[i] < sequencePositions[i + 1]) {
        longestIncreasingSubsequence[i] = array[sequencePositions[i]]
      } else {
        for (j = sequencePositions[i + 1] - 1; j >= 0; j--) {
          if (array[j] >= array[sequencePositions[i]] && array[j] <= array[sequencePositions[i + 1]]) {
            longestIncreasingSubsequence[i] = array[j]
            sequencePositions[i] = j
            break
          }
        }
      }
    }
    return longestIncreasingSubsequence
  }

  const sequencePositions = findSequence(array)
  const longestIncreasingSubsequence = createSequenceArray(array, sequencePositions)

  return longestIncreasingSubsequence
}
