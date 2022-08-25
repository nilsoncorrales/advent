import isValid from './index'

/* A test case. */
describe('Day 2 challenge', () => {
  test('¡Ayuda al elfo a listar los regalos!', () => {
    // "bici coche (balón) bici coche peluche" // -> ✅
    // "(muñeca) consola bici" // ✅

    // "bici coche (balón bici coche" // -> ❌
    // "peluche (bici [coche) bici coche balón" // -> ❌
    // "(peluche {) bici" // -> ❌
    // "() bici" // ❌
    const carta = 'bici coche balón _playstation bici coche peluche'
    expect(isValid(carta)).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    })
  })
})
