const chai = require('chai')
const expect = chai.expect

const MyClass = require('../../src/js/MyClass')

describe('MyClass', function () {
  describe('#convertRomanToNumber', function () {
    it('should convert I to 1', function () {
      expect(MyClass.convertRomanToNumber('I')).to.be.equal(1)
    })
    it('should convert V to 5', function () {
      expect(MyClass.convertRomanToNumber('V')).to.be.equal(5)
    })
    it('should convert X to 10', function () {
      expect(MyClass.convertRomanToNumber('X')).to.be.equal(10)
    })
    it('should convert XXXII to 32', function () {
      expect(MyClass.convertRomanToNumber('XXXII')).to.be.equal(32)
    })
    it('should convert IV to 4', function () {
      expect(MyClass.convertRomanToNumber('IV')).to.be.equal(4)
    })
    it('should convert XLII to 42', function () {
      expect(MyClass.convertRomanToNumber('XLII')).to.be.equal(42)
    })
    it('should convert MMXIII to 2013', function () {
      expect(MyClass.convertRomanToNumber('MMXIII')).to.be.equal(2013)
    })
    it('should convert MCMXLII to 1942', function () {
      expect(MyClass.convertRomanToNumber('MCMXLII')).to.be.equal(1942)
    })
    it('should convert MMMMM to 5000', function () {
      expect(MyClass.convertRomanToNumber('MMMMM')).to.be.equal(5000)
    })
  })
})
