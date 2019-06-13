import { stub } from 'sinon'
import { hook } from 'require-hacker'

import * as MiuiStyles from '@material-ui/core/styles'
import * as MiuiStylesBeta from '@material-ui/styles'

import * as avatar from '@/assets/images-demo/g1.jpg'

hook('jpg', () => `module.exports = ""`)

stub(MiuiStyles, 'createMuiTheme').returns({})
stub(MiuiStylesBeta, 'install').returns(() => {})

stub(avatar).returns('')

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

global.cancelAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

global.getComputedStyle = (element, options) => {
  return {}
}
