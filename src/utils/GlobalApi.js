import { axiosAPI } from './request'

export function GlobalLogin() {
  return axiosAPI('getGlobalLogin')
}
export function GlobalUser(parms) {
  return axiosAPI('getGlobalUser',JSON.stringify(parms))
}

