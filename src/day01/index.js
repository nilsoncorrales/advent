/**
 * It filters the array of objects by color, then filters the resulting array by name
 * @param {{name : string, color: string}[]} ovejas - [{name: 'Dolly', color: 'rojo'}, {name: 'Lana', color: 'negro'}, {name: 'Lola',
color: 'rojo'}, {name: 'Lana', color: 'rojo'}, {name:
 * @returns an array of objects that have the color red and the name includes the letters n and a.
 */
export default function countSheeps (ovejas) {
  const result = ovejas.filter((o) => o.color === 'rojo')
  const result2 = result.filter((o) => o.name.toLowerCase().includes('n') && o.name.toLowerCase().includes('a'))
  return result2
}
