class MyClass {
  static convertRomanToNumber (roman) {
    let temp = 0
 
    for (let i = 0; i < roman.length - 1; i++) {
      const valueOfToken1 = romanLiterals[roman[i]]
      const valueOfToken2 = romanLiterals[roman[i + 1]]

      if (valueOfToken1 < valueOfToken2) {
        temp -= valueOfToken1
      } else {
        temp += romanLiterals[roman[i]]
      }
    }

    temp += romanLiterals[roman[roman.length - 1]]

    return temp
  }
}
const romanLiterals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}
module.exports = MyClass
