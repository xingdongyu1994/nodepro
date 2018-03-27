
import { all, put, call, takeEvery, fork } from 'redux-saga/effects'
import _ from 'lodash'
import * as MyPageApi from '../../utils/MyPageApi'

// 我的主页 -- 获取数据
export function* axiosMyPageList(action) {
  try {
    const mypage  =yield call(MyPageApi.MyPageGetInfo)
    console.log("破壳ijuhygfds",mypage)
  } catch (e) {
  }
}
export default function* MyPageSaga() {
  yield [
    takeEvery('MYPAGE', axiosMyPageList),
  ]
}
