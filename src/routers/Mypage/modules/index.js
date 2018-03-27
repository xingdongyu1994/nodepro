import Immutable from 'immutable'

const GRAFANALIST = 'GRAFANALIST'
//页面第一初始状态
var initialState = Immutable.fromJS({
  
})

export default function mypageinfo (state = initialState, action) {
  var map = {
   
  }
  if(map[action.type]) {
		return map[action.type]();
	} else {
		return state;
	}
}
