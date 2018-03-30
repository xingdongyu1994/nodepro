import React from 'react'
import { Flex, WhiteSpace,Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import Top from '../components/Top'
import Login from '../components/Login'
import './index.css'

class Layouts extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoginpage:false     
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'GLOBALLOGIN',
      isCallback: (data)=>{
        if(data == 'nologin') {
          console.log("选的多多多",this)
          this.setState({
            isLoginpage:true
          })
        } else {
          this.setState({
            isLoginpage:false
          })
        }
      },
    })
  }
  LoginHand =(value) => {
    console.log("；老会计很规范等",value)
    const { dispatch } = this.props
    dispatch({
      type: 'GLOBALUSER',
      payload: value,
      isCallbackUser: ()=>{
        this.setState({
          isLoginpage:false
        })
        Toast.success('登录成功', 1)
      },
      isCallbackUsererror: ()=> {
        this.setState({
          isLoginpage:true
        })
        Toast.fail('登录失败', 1)
      }
    })
  }
  render () {
    const {isLoginpage}=this.state
    return (
      <div className="my-container">
         {
           isLoginpage?
            <div className="my-container-login">
              <Login LoginHand ={this.LoginHand}/>
            </div>
           : 
            <div className="my-container-main">
              <div className="my-container-top">
                <Top />
              </div>
              <div className="my-container-content">
                {this.props.children}
              </div>
            </div>
         }
         {/* <div className="my-container-top">
            <Top />
         </div> */}
         {/* <div className="my-container-main">
            <div className="my-container-silder">
              <Silder />
            </div>
            <div className="my-container-content">
              {this.props.children}
            </div>
         </div> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    globalinfo: state.globalinfo.toJS(),
  }
}

export default connect(mapStateToProps)(Layouts)
// export default Layouts
