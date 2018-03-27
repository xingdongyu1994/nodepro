import React from 'react'
import ReactDOM from 'react-dom'
import AppRouterfe from './AppRouterfe'
import { hashHistory, browserHistory } from 'react-router'

// import configureStore from './stores'
import { createRoutes } from './routers'

// const store = configureStore()
const routes = createRoutes()
ReactDOM.render(
  <AppRouterfe
    history={hashHistory}
    routes={routes}
  />,
  document.getElementById('root'))



