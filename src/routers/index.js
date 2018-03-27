import Layouts from '../Layouts'
import Mypage from './Mypage'
export const createRoutes = () => ({
  path: '/',
  component: Layouts,
  childRoutes: [
    Mypage
  ],
})

export default createRoutes
