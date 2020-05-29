import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'

axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'weizhongqi_1553776754930'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
