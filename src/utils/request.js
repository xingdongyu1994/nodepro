import axios from 'axios'
const serveurl = 'http://localhost:1111'
const map = {
  getMyPage: {
    url: `${serveurl}/mypage`,
    method: 'GET',
  },
}

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})
export function axiosAPI(type, body, appendPath = '') {
  let url = map[type].url + appendPath
  const config = {
    headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
    credentials: 'include',
    mode: 'cors',
    method: map[type].method,
  }

  if (map[type].method === 'GET') {
    if (body) {
      url += `${body}`
    } else {
      url = url
    }
  } else {
    config.data = body
  }
  return axios(url, config)
      .then(response => {
        return OkStatus(response)
      })
      .then(res => {
        return ErrorStatus(res)
      })
}

function OkStatus (response) {
  if (response && (response.status === 200)) {
    return response
  } else if(response.status === 401) {
    console.log("当前域名",`https://cas.mioffice.cn/login?service=https://${document.domain}:8080/api/grafana/v1/login`)
    window.location.href = `https://cas.mioffice.cn/login?service=https://${document.domain}/api/grafana/v1/login`
  }
  return response
}
function ErrorStatus (res) {
  if (res.status != 200) {
    console.log('出现错误的是哈哈哈', res)
    return res
  }
  return res
}
