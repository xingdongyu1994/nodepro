import { combineReducers } from 'redux'
// import globalinfo from '../globalmodules/index'
import mypageinfo from '../routers/Mypage/modules/index'

export const makeRootReducer = ()=> {
  return combineReducers({
    mypageinfo,
  })
}
export default makeRootReducer
