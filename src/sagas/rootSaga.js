import GlobalSaga from './GlobalSaga/GlobalSaga'
import MyPageSaga from './ChildSaga/MyPageSaga'
export default function* rootSaga() {
  yield [
    GlobalSaga(),
    MyPageSaga()
  ]
}
