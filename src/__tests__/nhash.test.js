const { nhash } = require('../nhash')

describe('nhash', () => {
  it('creates the hash from the paper', () => {
    const control = {
      r: 783305,
      name: 'AARONSKOTNICA',
      mrn: '07172485',
      dob: '08131956',
    }

    expect(nhash(control)).toEqual('TSXP606170783305')
  })
})
