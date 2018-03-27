import { axiosAPI } from './request'

export function MyPageGetInfo(parms) {
  return axiosAPI('getMyPageInfo',parms)
}