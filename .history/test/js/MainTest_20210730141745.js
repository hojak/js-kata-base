const chai = require('chai')
const expect = chai.expect

const MyClass = require('../../src/js/MyClass')

describe('MyClass', function () {
  describe('#convertRomanToNumber', function () {
    it('should convert return 1', function () {
      expect(MyClass.myFunction()).to.be.equal(1)
    })
  })
})
