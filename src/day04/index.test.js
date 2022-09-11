import createXmasTree from './index'

/* A test case. */
describe('Day 4 challenge', () => {
  test('¡Es hora de poner el árbol de navidad en casa! 🎄', () => {
    /**
      __*__
      _***_
      *****
      __#__
      __#__
     */
    const tree = '__*__\n_***_\n*****\n__#__\n__#__'
    expect(createXmasTree(3)).toEqual(tree)
  })
})
