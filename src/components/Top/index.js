import React from 'react'
import { Menu, Icon, NavBar, ActivityIndicator } from 'antd-mobile'
import { Link } from 'react-router'

import './index.css'
import 'antd-mobile/dist/antd-mobile.css'
class Top extends React.Component {
  constructor () {
    super()
    this.state = {
      initData:[
        {
          value: '1',
          label: 'Food',
        }, {
          value: '2',
          label: 'Supermarket',
        },
        {
          value: '3',
          label: 'Extra',
        },
      ],
      show: false,
    }
  }
 
  handClick(e) {
    
    e.preventDefault()
    this.setState({
      show: !this.state.show,
    })
    // if (!this.state.initData) {
    //   setTimeout(() => {
    //     this.setState({
    //       initData: data,
    //     });
    //   }, 500);
    // }
  }
  handChange =(value)=>{
    // let label = '';
    const {data}  =this.state
    // data.forEach((dataItem) => {
    //   if (dataItem.value === value[0]) {
    //     label = dataItem.label;
    //     if (dataItem.children && value[1]) {
    //       dataItem.children.forEach((cItem) => {
    //         if (cItem.value === value[1]) {
    //           label += ` ${cItem.label}`;
    //         }
    //       });
    //     }
    //   }
    // });
    // this.props.history.pushState({passParam: true}, "/targetURL"); 
    console.log("选中",value)
  }
  render () {
    const { initData, show } = this.state
    return (
      <div>
        <NavBar
          leftContent="Menu"
          mode="light"
          onLeftClick={this.handClick.bind(this)}
          className="single-top-nav-bar"
        ></NavBar>
        <div>
          {
            show?
              <div className="top-showmenu">
                <ul>
                  <li><Link  to={'mypage'}><span>我的主页</span></Link></li>
                </ul>
              </div>
            :
             ""
          }
        </div>
      </div>
    )
  }
}
export default Top