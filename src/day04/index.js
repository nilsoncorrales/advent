// PASOS
/**
 1. funcion donde le pase la altura del arbol y me devuelva un arreglo de numeros que seran remplazados por triángulo de asteriscos dependiendo del numero mostrado en el arreglo
    EXAMPLE fun alturaArbol(3) => [1,3,5] ===> 1 = * , 3 = ***, 5 = *****
 2. funcion que retorne una lista de guión bajo de acuerdo a la altura del arbol
 */

export default function createXmasTree (height) {
  // ¡Y no olvides también poner los turrones
  return showTree(height)
}

/**
 * # Esta funcion devuelve un arreglo de numeros
 * It creates an array of odd numbers up to the height of the tree.
 * @param altura - the height of the tree
 * @returns An array of odd numbers.
 */
function getNumberForTree (altura) {
  const arrayNumberImpar = []
  let numberAdd = 0
  while (arrayNumberImpar.length < altura) {
    const numberImpar = (numberAdd % 2) > 0
    if (numberImpar) {
      arrayNumberImpar.push(numberAdd)
    }
    numberAdd++
  }
  return arrayNumberImpar
}

// retorna una lista de guión bajo de acuerdo al ultimo numero de la funcion /getNumberForTree/
function getArbolGuiones (cant) {
  const data = []
  for (let i = 0; i < cant; i++) {
    data.push('_')
  }
  return data
}

function getStartPosition (longitud, value) {
  return Math.floor((longitud - value) / 2)
}

/**
 * # Esta funcion reemplaza los guiones por asceriscos, el arreglo de numeros es la cantidad de asceriscos por fila
 * It takes a base array, a starting position, and a number of items to replace, and returns a new
 * array with the items replaced.
 * @param baseTheTree - the array that contains the tree.
 * @param startPosition - the position where the asterisks will start to be painted
 * @param cantidadAPintar - the number of asterisks to be painted
 * @returns a new array with the same values as the original array, but with the values in the
 * positions specified by the function parameters replaced by asterisks.
 */
function replaceGuionesToAsceriscos (baseTheTree, startPosition, cantidadAPintar) {
  let count = 0
  let newData = []
  newData = [...baseTheTree]
  while (count < cantidadAPintar) {
    const newPosition = startPosition + count
    newData[newPosition] = '*'
    count++
  }
  return newData
}

/**
 * It takes an array, a starting position, and a number of items to replace, and returns a new array
 * with the items replaced.
 * @param baseTheTree - the array that contains the tree.
 * @param startPosition - the position where the trunk will start to be painted
 * @param cantidadAPintar - is the number of trunks to be painted
 * @returns The newData array with the new values.
 */
function replaceGuionesToTronco (baseTheTree, startPosition, cantidadAPintar) {
  let count = 0
  let newData = []
  newData = [...baseTheTree]
  while (count < cantidadAPintar) {
    const newPosition = startPosition + count
    newData[newPosition] = '#'
    count++
  }
  return newData
}

/**
 * It takes a number, and returns an array of strings, each string being a row of a tree.
 * @param altura - height of the tree
 * @returns An array of strings.
 */
function assembleTree (altura) {
  const numbersForTree = getNumberForTree(altura)
  const longitudTree = numbersForTree[numbersForTree.length - 1]
  const baseTheTree = getArbolGuiones(longitudTree)
  const listTree = []
  for (let i = 0; i < altura; i++) {
    const startPosition = getStartPosition(longitudTree, numbersForTree[i])
    const rowTree = replaceGuionesToAsceriscos(baseTheTree, startPosition, numbersForTree[i])
    listTree.push(rowTree)
  }
  // TRONCO
  for (let i = 0; i < 2; i++) {
    const startPosition = getStartPosition(longitudTree, 1)
    const rowTronco = replaceGuionesToTronco(baseTheTree, startPosition, 1)
    listTree.push(rowTronco)
  }
  return listTree
}

/**
 * It takes a number as an argument, assembles a tree based on that number, and returns a string of the
 * tree.
 * @param height - the height of the tree
 * @returns a string that represents a tree.
 */
function showTree (height) {
  const tree = assembleTree(height)
  let finalTree = ''
  for (let i = 0; i < tree.length; i++) {
    const rowTree = tree[i]
    let response = ''
    for (let i = 0; i < rowTree.length; i++) {
      response += rowTree[i]
    }
    const saltoDeLine = (i === (tree.length - 1)) ? '' : '\n'
    finalTree += response + saltoDeLine
  }
  return finalTree
}
