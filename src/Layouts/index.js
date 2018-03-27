import React from 'react'
import { axiosAPI } from '../utils/request'
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
  componentDidMount(){
    axiosAPI('getMyPage').then(function(res){
      console.log("老会计很规范等111111111111111",res)
    })
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
