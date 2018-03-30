import { all, put, call, takeEvery, fork } from 'redux-saga/effects'
import _ from 'lodash'
import * as GlobalApi from '../../utils/GlobalApi'
// 全局登录
export function* axiosGlobalLogin(action) {
  try {
    const mylogin  =yield call(GlobalApi.GlobalLogin)
    console.log("破壳ijuhygfds",mylogin)
    // if(mylogin.data == 'nologin') {
      action.isCallback(mylogin.data)
    // }
  } catch (e) {
  }
}
// 全局登录
export function* axiosGlobalUser(action) {
  try {
    const myuser  =yield call(GlobalApi.GlobalUser,action.payload)
    console.log("破壳ijuhygfds",myuser)
    if(myuser.data == 'success') {
      action.isCallbackUser()
    } else {
      action.isCallbackUsererror()
    }
  } catch (e) {
  }
}
export default function* GlobalSaga() {
  yield [
    takeEvery('GLOBALLOGIN', axiosGlobalLogin),
    takeEvery('GLOBALUSER', axiosGlobalUser),
    
  ]
}
