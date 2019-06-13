import { expect } from '@/../test/expect'

import {
  sendErrorMessage,
  GENERIC_ERROR_MESSAGE,
  NOT_AUTHORIZED_ERROR_MESSAGE,
  BAD_GATEWAY_ERROR_MESSAGE,
  PLEASE_LOGIN_MESSAGE
} from '@/utils/error-handling/async-calls'

describe('Error Handling - Asynchronous Calls Utilities', () => {
  it('return given message', () => {
    const error = {
      response: {
        data: {
          error: {
            message: 'Error here'
          }
        }
      }
    }
    const result = sendErrorMessage(error)
    expect(result).to.be.equal(error.response.data.error.message)
  })

  it(`return "${GENERIC_ERROR_MESSAGE}"`, () => {
    const error = {
      response: {
        data: {
          error: {
            message: null
          }
        }
      }
    }
    const result = sendErrorMessage(error)
    expect(result).to.be.equal(GENERIC_ERROR_MESSAGE)
  })

  it(`return "${NOT_AUTHORIZED_ERROR_MESSAGE}"`, () => {
    const error = {
      response: {
        status: 401
      }
    }
    const result = sendErrorMessage(error)
    expect(result).to.be.equal(NOT_AUTHORIZED_ERROR_MESSAGE)
  })

  it(`return "${BAD_GATEWAY_ERROR_MESSAGE}"`, () => {
    const error = {
      response: {
        status: 502
      }
    }
    const result = sendErrorMessage(error)
    expect(result).to.be.equal(BAD_GATEWAY_ERROR_MESSAGE)
  })
})
