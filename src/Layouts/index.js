import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { connect } from 'react-redux'
import Top from '../components/Top'
import Silder from '../components/Silder'
import './index.css'

class Layouts extends React.Component {
  constructor () {
    super()
    this.state = {
     
    }
  }
  
  render () {
    
    return (
      <div className="my-container">
         <div className="my-container-top">
            <Top />
         </div>
         <div className="my-container-main">
            <div className="my-container-silder">
              <Silder />
            </div>
            <div className="my-container-content">
              {this.props.children}
            </div>
         </div>
      </div>
    )
  }
}

export default Layouts
