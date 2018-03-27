import React from 'react'
import { Icon, Dropdown, Avatar, Menu } from 'antd'
import { Link } from 'react-router'
class Silder extends React.Component {
  componentDidMount(){
    
  }
  render () {
   
    return (
      <div>
         <Link to={'/mypage'}>导航</Link>
         <Link to={'/mycode'}>代码</Link>
      </div>
    )
  }
}
export default Silder