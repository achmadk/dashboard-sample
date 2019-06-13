import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import * as AppConfig from '@/constants/app-config'

import { expect } from 'chai'

import {
  LoginForm,
  mapStateToProps,
  loadLoginForm
} from '@/components/form/login'

describe('Login Form Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper).to.exist
  })

  it('render incorrectly because one module is missing', async () => {
    let materialUiButtonStub = null
    try {
      materialUiButtonStub = stub(AppConfig, 'BRAND').set(() => null)
      const wrapper = shallow(<LoginForm />)
      const result = await LoginForm.prototype.componentDidMount()
      expect(wrapper).to.exist
      expect(result).to.exist
    } catch (error) {
      expect(error).to.be.not.undefined
    }
    materialUiButtonStub.restore()
  })

  it('successfully call doLogin', async () => {
    try {
      const props = {
        dispatch: jest.fn(() => jest.fn()),
        enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
        history: {
          push: jest.fn()
        }
      }
      const wrapper = shallow(<LoginForm {...props} />)
      jest.spyOn(wrapper.instance(), 'doLogin')
      const result = await wrapper.instance().doLogin(
        {
          login: 'superadmin',
          password: 'test1234'
        },
        { setSubmitting: jest.fn() }
      )
      expect(result).to.exist
    } catch (error) {
      console.log(error)
      expect(error).to.exist
    }
  })

  it('error call doLogin', async () => {
    try {
      const props = {
        enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
        history: {
          push: jest.fn()
        }
      }
      const wrapper = shallow(<LoginForm {...props} />)
      jest.spyOn(wrapper.instance(), 'doLogin')
      const result = await wrapper.instance().doLogin(
        {
          login: 'superadmin',
          password: 'superadmin'
        },
        { setSubmitting: jest.fn() }
      )
      expect(result).to.exist
    } catch (error) {
      console.log(error)
      expect(error).to.exist
    }
  })

  it('successfully call renderLoginForm with loading state true', async () => {
    try {
      const props = {
        dispatch: jest.fn(() => jest.fn()),
        enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
        history: {
          push: jest.fn()
        }
      }
      const wrapper = shallow(<LoginForm {...props} />)
      jest.spyOn(wrapper.instance(), 'renderLoginForm')
      const result = await wrapper.instance().renderLoginForm({
        values: {},
        isValid: true,
        handleSubmit: jest.fn(() => jest.fn()),
        isSubmitting: false,
        handleChange: jest.fn(() => jest.fn()),
        errors: {}
      })
      expect(result).to.exist
    } catch (error) {
      console.log(error)
      expect(error).to.exist
    }
  })

  it('successfully call renderLoginForm with loading state false', async () => {
    try {
      const props = {
        dispatch: jest.fn(() => jest.fn()),
        enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
        history: {
          push: jest.fn()
        }
      }
      const wrapper = shallow(<LoginForm {...props} />)
      jest.spyOn(wrapper.instance(), 'renderLoginForm')
      wrapper.setState({
        loading: false,
        components: {
          TextField,
          Button
        }
      })
      const result = await wrapper.instance().renderLoginForm({
        values: {},
        isValid: true,
        handleSubmit: jest.fn(() => jest.fn()),
        isSubmitting: false,
        handleChange: jest.fn(() => jest.fn()),
        errors: {}
      })
      expect(result).to.exist
    } catch (error) {
      console.log(error)
      expect(error).to.exist
    }
  })

  it('return LoginForm Component successfully', async () => {
    try {
      const Component = await loadLoginForm()
      expect(Component).to.be.not.undefined
    } catch (error) {
      expect(error).to.be.not.undefined
    }
  })

  it('return mapped props', () => {
    const store = {
      user: {
        data: {
          username: 'test',
          authn_token: 'test'
        }
      }
    }
    const result = mapStateToProps(store)
    expect(result.userParams).to.eql(store.user.data)
    expect(result.isAuthenticated).to.be.true
  })
})
