const { shiftCipher } = require('../shiftCipher')

describe('shiftCipher', () => {
  it('correctly rotates given a key of 0', () => {
    expect(shiftCipher('abz', 0)).toEqual('abz')
  })

  it('correctly rotates given a key of 1', () => {
    expect(shiftCipher('abz', 1)).toEqual('bca')
  })

  it('correctly rotates given a key of 3', () => {
    expect(shiftCipher('JAVASCRIPT', 3)).toEqual('MDYDVFULSW')
  })
})
