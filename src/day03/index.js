
/**
 * If the parentheses are not empty and the parentheses are not the first or last character, then the
 * parentheses are valid.
 * @param {string} letter - A string that contains a single letter.
 * @returns A function that takes a string as an argument and returns a boolean.
 * "(()) bici" debería ser inválido
 */
export default function isValid (letter) {
  // ¡No dejes que el Grinch gane!
  const firstParentheses = letter.indexOf('(')
  const secondParentheses = letter.indexOf(')')
  const textFinded = letter.slice(firstParentheses, secondParentheses + 1)
  const textExtract = textFinded.slice(1, (textFinded.length - 1))
  const firstFilter = !(textExtract.includes('{') || textExtract.includes('['))
  const secondFilter = textExtract.length > 0
  const threeFilter = !(textExtract.includes('(') || textExtract.includes(')'))
  const result = firstFilter && secondFilter && threeFilter
  return result
}
