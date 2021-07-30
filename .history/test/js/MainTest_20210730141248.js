const chai = require('chai')
const expect = chai.expect

const MyClass = require('../../src/js/MyClass')

describe('MyClass', function () {
  describe('#myFunction', function () {
    it('should always return 1', function () {
      expect(MyClass.myFunction()).to.be.equal(1)
    })
  })
})
