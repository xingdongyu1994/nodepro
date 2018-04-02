import Immutable from 'immutable'

const MYPAGELISTDATA = 'MYPAGELISTDATA'
//页面第一初始状态
var initialState =Immutable.fromJS({
  mypagelist :[]
})

export default function mypageinfo (state = initialState, action) {
  var map = {
    MYPAGELISTDATA: function () {
      
      return state.set('mypagelist', Immutable.fromJS(action.payload))
    },
    
  }
  if(map[action.type]) {
		return map[action.type]();
	} else {
		return state;
	}
}
