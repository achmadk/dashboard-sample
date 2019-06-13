import React, { PureComponent } from 'react'

import LoginForm from '@/components/form/login'

import { SIGN_UP, FORGOT_PASSWORD } from '@/constants/demo-data'

export default class Login extends PureComponent {
  state = {
    components: null
  }

  async componentDidMount () {
    try {
      const { default: QueueAnim } = await import('rc-queue-anim')
      this.setState({
        components: {
          QueueAnim
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  doLogin = async () => {
    const { dispatch, history } = this.props
    try {
      const formData = { login: 'superadmin', password: 'test1234' }
      const {
        doLogin
      } = await import(/* webpackChunkName: "do-login", webpackPrefetch: true */ '@/shared-state/actions/user')
      await dispatch(doLogin(formData))
      history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { QueueAnim } = this.state?.components || {
      QueueAnim: false
    }
    return (
      <div className='page-login'>
        <div className='main-body'>
          {QueueAnim && (
            <QueueAnim type='bottom' className='ui-animate'>
              <div key='1'>
                <div className='body-inner'>
                  <LoginForm />
                  <div className='additional-info'>
                    <a href={SIGN_UP}>Sign up</a>
                    <span className='divider-h' />
                    <a href={FORGOT_PASSWORD}>Forgot your password?</a>
                  </div>
                </div>
              </div>
            </QueueAnim>
          )}
        </div>
      </div>
    )
  }
}
