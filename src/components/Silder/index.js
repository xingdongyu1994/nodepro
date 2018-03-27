import React from 'react'
import { Icon, Dropdown, Avatar, Menu } from 'antd'
import { Link } from 'react-router'
class Silder extends React.Component {
  componentDidMount() {

  }
  render () {
   
    return (
      <div>
         <Link to={'/mypage'}>导航</Link>
      </div>
    )
  }
}
export default Silder