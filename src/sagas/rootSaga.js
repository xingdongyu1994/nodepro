import GlobalSaga from './GlobalSaga/GlobalSaga'
export default function* rootSaga() {
  yield [
    GlobalSaga()
  ]
}
