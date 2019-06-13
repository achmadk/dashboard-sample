// import 'jsdom-global/register'
// import './mock-polyfill'

// import { JSDOM } from 'jsdom'
// import Node from 'jsdom/lib/jsdom/living/node-document-position'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import chaiEnzyme from 'chai-enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import $ from 'jquery'

let adapter = new Adapter()
configure({ adapter })

global.$ = $

// const win = new JSDOM(`<!doctype html><html><body></body></html>`, {
//   resources: 'usable'
// })
// const doc = win.window.document

// const exposedProperties = ['window', 'navigator', 'document']

// global.document = doc
// global.Node = Node
// global.window = win

// Object.keys(window).forEach((key) => {
//   if (!(key in global)) {
//     exposedProperties.push(key)
//     global[key] = window[key]
//   }
// })

// global.navigator = { userAgent: 'node.js' }

// chai.use(chaiImmutable)
// chai.use(chaiEnzyme(debugTest))

// function debugTest (wrapper) {
//   return wrapper.html()
// }

// function copyProps (src, target) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === 'undefined')
//     .reduce((result, prop) => ({
//       ...result,
//       [prop]: Object.getOwnPropertyDescriptor(src, prop)
//     }), {})
//   Object.defineProperties(target, props)
// }
// copyProps(window, global)
