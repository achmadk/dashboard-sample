import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiImmutable)
chai.use(chaiEnzyme(debugTest))

function debugTest (wrapper) {
  return wrapper.html()
}

export const expect = chai.expect
