import React from 'react'
import { Icon, Dropdown, Avatar, Menu } from 'antd'
import { Link } from 'react-router'
class Silder extends React.Component {
  componentDidMount(){
    
  }
  render () {
   
    return (
      <ul>
         <li><Link to={'/mypage'}>导航</Link></li>
         <li><Link to={'/mycode'}>代码</Link></li>
      </ul>
    )
  }
}
export default Silder