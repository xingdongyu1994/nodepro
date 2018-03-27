import { combineReducers } from 'redux'
import globalinfo from '../globalmodules/index'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    globalinfo,
    ...asyncReducers,
  })
}
export default makeRootReducer
