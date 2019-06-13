import 'expose-loader?$!jquery' // eslint-disable-line import/no-webpack-loader-syntax
import 'expose-loader?jQuery!jquery' // eslint-disable-line import/no-webpack-loader-syntax
import 'jquery-slimscroll'

import React from 'react'
import { render, hydrate } from 'react-dom'

import App from '@/components/root'

import '@/assets/styles/index.scss'

const mountContainer = document.getElementById('app')
const init = mountContainer.hasChildNodes() ? render : hydrate
init(<App />, mountContainer)
