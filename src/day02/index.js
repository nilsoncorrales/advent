/**
 * It takes a string, splits it into an array, filters out the words with underscores, then counts the
 * number of times each word appears in the array
 * @param {string} letter - "a b c d e f g h i j k l m n o p q r s t u v w x y z"
 * @returns An object with the number of times each word appears in the string.
 */
export default function listGifts (letter) {
  const result = letter
    .trim()
    .split(' ')
    .filter((v) => !v.includes('_'))
  const result2 = result.reduce((valorAnterior, valorActual) => {
    if (!valorAnterior[valorActual]) valorAnterior[valorActual] = 1
    else valorAnterior[valorActual]++
    return valorAnterior
  }, {})
  return result2
}
