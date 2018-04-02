import React from 'react'
import { Icon, Dropdown, Avatar, Menu } from 'antd'
import { connect } from 'react-redux'
import { ListView } from 'antd-mobile'

// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'MYPAGELIST'
    })
    setTimeout(() => {
      this.rData = genData();
      console.log("fsdafsdafsdafsda让把发的发士大夫士大夫三大范围分为二位二位 ",this.state.dataSource.cloneWithRows(this.rData))
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 0);
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      data: newProps.mypageinfo.mypagelist
    })
  }
  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }
  render () {
    const {data}=this.state
    let index = data.length - 1
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1
      }
      const obj = data[index--]
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div className="mypage-title">{obj.title}</div>
          <div className="mypage-content">
            <img className="mypage-img" src='https://cdn.cnbj1.fds.api.mi-img.com/oga-mini/prizebg.png' alt="" />
            <div>
              <div className="mypage-content-des">{obj.description}</div>
              <div><span className="mypage-content-price">{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    }
    console.log("vva发生大法师大噶撒奥奥奥奥奥奥奥奥奥奥奥",this.state.dataSource)
    return (
      <div>
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={() => <span>header</span>}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}

          className="am-list"
          pageSize={4}
          useBodyScroll
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
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