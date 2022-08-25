import isValid from './index'

/* A test case. */
describe('Day 3 challenge', () => {
  test('El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱', () => {
    // "bici coche (balón) bici coche peluche" // -> ✅
    // "(muñeca) consola bici" // ✅

    // "bici coche (balón bici coche" // -> ❌
    // "peluche (bici [coche) bici coche balón" // -> ❌
    // "(peluche {) bici" // -> ❌
    // "() bici" // ❌
    // const grinch = 'bici coche (balón) bici coche peluche'
    const grinch = '(()) bici'
    expect(isValid(grinch)).toEqual(true)
  })
})
