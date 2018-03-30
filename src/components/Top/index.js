import React from 'react'
import { Menu, Icon, NavBar, ActivityIndicator } from 'antd-mobile'
import TopMenu from './TopMenu'
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
  onChange(value){
    // let label = '';
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
              <Menu
                className="single-foo-menu"
                data={initData}
                value={['1']}
                level={1}
                onChange={this.onChange.bind(this)}     
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