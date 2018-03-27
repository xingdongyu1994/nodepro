import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

class AppRouterfe extends React.Component {
  render () {
    const { history, routes } = this.props
    return (
      <Provider>
        <Router history={history} children={routes}/>
      </Provider>
    )
  }
}
export default AppRouterfe


