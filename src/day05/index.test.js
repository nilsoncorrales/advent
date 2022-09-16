import daysToXmas from './index'

describe('Day 5 challenge', () => {
  test('Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆', () => {
    const date4 = new Date('December 20, 2021 03:24:00')
    expect(daysToXmas(date4)).toEqual(5)
  })
})
