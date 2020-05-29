import axios from '@/axios.js'

var api = {
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getseaechWord (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
