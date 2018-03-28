import React from 'react'
import { Menu, Icon, NavBar, ActivityIndicator } from 'antd-mobile'
import TopMenu from './TopMenu'
import './index.css'
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
          isLeaf: true,
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
  
  render () {
    const { initData, show } = this.state
    return (
      <div>
        <NavBar
          leftContent="Menu"
          mode="light"
          icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
          onLeftClick={this.handClick.bind(this)}
          className="single-top-nav-bar"
        ></NavBar>
        <div>
        
          {
            show?
              <Menu
                className="single-foo-menu"
                data={initData}
                value={['1']}
                level={1}
              
                height={document.documentElement.clientHeight * 0.6}
              />
            :
             ""
          }
          
        </div>
      </div>
    )
  }
}
export default Top