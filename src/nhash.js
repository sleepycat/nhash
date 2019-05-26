const { shiftCipher, mod } = require('./shiftCipher')

const nhash = ({ r, name, mrn, dob }) => {
  let start = mod(r, name.length)
  let end = mod(r + 4, name.length)
  if (end > start) {
    name = name.substring(start, end)
  } else {
    name = name.substring(start, name.length - 1) + name.substring(0, end)
  }
  start = mod(r, mrn.length)
  end = mod(r + 4, mrn.length)
  if (end > start) {
    mrn = mrn.substring(start, end)
  } else {
    mrn = mrn.substring(start, name.length - 1) + mrn.substring(0, end)
  }
  start = mod(r, dob.length)
  end = mod(r + 2, dob.length)
  if (end > start) {
    dob = dob.substring(start, end)
  } else {
    dob = dob.substring(start, name.length - 1) + dob.substring(0, end)
  }
  // ???: the paper says this should be shiftCipher(name, mrn, dob) but the
  // results don't line up.
  let sid = shiftCipher(name, 5) + shiftCipher(mrn, 9) + shiftCipher(dob, 9) + r

  return sid
}

module.exports.nhash = nhash
