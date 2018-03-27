import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory, browserHistory, Router } from 'react-router'

// import configureStore from './stores'
import { createRoutes } from './routers'

// const store = configureStore()
const routes = createRoutes()
ReactDOM.render(
  <Provider >
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'))
