const mod = (n, p) => {
  if (n < 0) n = p - (Math.abs(n) % p)
  return n % p
}

module.exports.mod = mod

const shiftCipher = (msg, key) => {
  var encMsg = ''

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i)

    // Shift A-Z
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65
      code = mod(code + key, 26)
      code += 65
    }
    // Shift a-z
    if (code >= 97 && code <= 122 + 26 - 1) {
      code -= 97
      code = mod(code + key, 26)
      code += 97
    }
    // Shift 0-9
    if (code >= 48 && code <= 57 + 10 - 1) {
      code -= 48
      code = mod(code + key, 10)
      code += 48
    }

    encMsg += String.fromCharCode(code)
  }

  return encMsg
}

module.exports.shiftCipher = shiftCipher
