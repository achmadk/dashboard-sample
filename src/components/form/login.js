import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import { Formik } from 'formik'

import { getUserParams } from '@/shared-state/map-state-to-props/user'
import { sendErrorMessage } from '@/utils/error-handling/async-calls'

import validationSchema from '@/schemas/validation/login'

export class LoginForm extends PureComponent {
  state = {
    components: null,
    validationSchema: null,
    loading: true
  }
  async componentDidMount () {
    try {
      const [
        { default: TextField },
        { default: Button },
        { BRAND: brand }
      ] = await Promise.all([
        import('@material-ui/core/TextField'),
        import('@material-ui/core/Button'),
        import('@/constants/app-config')
      ])
      this.setState({
        components: {
          TextField,
          Button
        },
        brand,
        loading: false
      })
    } catch (e) {
      console.log('error: ', e)
      this.setState({
        loading: false
      })
    }
  }
  initialValues = {
    login: '',
    password: ''
  }
  doLogin = async (values, { setSubmitting }) => {
    const { dispatch, history, enqueueSnackbar } = this.props
    setSubmitting(true)
    try {
      const {
        doLogin
      } = await import(/* webpackChunkName: "do-login", webpackPrefetch: true */ '@/shared-state/actions/user')
      await dispatch(doLogin(values))
      history.push('/profile')
      setSubmitting(false)
    } catch (error) {
      const message = sendErrorMessage(error)
      enqueueSnackbar(message, { variant: 'error' })
      setSubmitting(false)
    }
  }
  renderLoginForm = ({
    values,
    isValid,
    handleSubmit,
    isSubmitting,
    handleChange,
    errors
  }) => {
    const { components, loading } = this.state
    const { TextField, Button } = components || {
      TextField: false,
      Button: false
    }
    console.log(values, isValid, isSubmitting)
    const checkSubmitBtnDisabled = !isValid || isSubmitting
    const cardStyles = {
      height: loading ? 359 : '100%'
    }
    return (
      <div className='card card-white' style={cardStyles}>
        {!loading && TextField && Button && (
          <form className='form-horizontal' onSubmit={handleSubmit}>
            <div className='card-content'>
              <section className='logo text-center'>
                <h1>
                  <a href='#/'>{this.state.brand}</a>
                </h1>
              </section>
              <fieldset>
                <div className='form-group'>
                  <TextField
                    id='login'
                    label='Username'
                    type='text'
                    aria-label='login'
                    value={values.login}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.login}
                    helperText={errors?.login || ' '}
                    autoFocus
                  />
                </div>
                <div className='form-group'>
                  <TextField
                    id='password'
                    label='Password'
                    type='password'
                    className='mt-3'
                    aria-label='password'
                    value={values.password}
                    fullWidth
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors?.password || ' '}
                  />
                </div>
              </fieldset>
            </div>
            <div className='card-action border-0 text-right'>
              <Button
                type='submit'
                className='color-primary'
                onClick={handleSubmit}
                disabled={checkSubmitBtnDisabled}
              >
                Login
              </Button>
            </div>
          </form>
        )}
      </div>
    )
  }
  render () {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={validationSchema}
        render={this.renderLoginForm}
        onSubmit={this.doLogin}
      />
    )
  }
}

export const mapStateToProps = ({ user }) => getUserParams(user)

export default compose(
  connect(mapStateToProps),
  withRouter,
  withSnackbar
)(LoginForm)

export async function loadLoginForm () {
  const [
    { compose },
    { connect },
    { withRouter },
    { withSnackbar }
  ] = await Promise.all([
    import('redux'),
    import('react-redux'),
    import('react-router-dom'),
    import('notistack')
  ])
  // const mapStatetoProps = ({ user }) => getUserParams(user)
  return compose(
    connect(mapStateToProps),
    withRouter,
    withSnackbar
  )(LoginForm)
}
