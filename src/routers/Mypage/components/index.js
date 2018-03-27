import React from 'react'
import { Icon, Dropdown, Avatar, Menu } from 'antd'
import { connect } from 'react-redux'
class Mypage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'MYPAGE'
    })
  }
  render () {
   
    return (
      <div>
         个人主页
      </div>
    )
  }
}
function mapStateToProps(state) {

  return {
    mypageinfo :state.mypageinfo.toJS(),
  } 
}
export default connect(mapStateToProps)(Mypage)
// export default Mypage