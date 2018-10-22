import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}
export const getTableBookData = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList',
    method: 'get'
  })
}
export const getSearchData = (keyword) => {
  // console.error('in1')
  return axios.request({
    url: 'https://sug.so.360.cn/suggest?word=' + keyword + '&encodein=utf-8&encodeout=utf-8'
    // method: 'get'
    // withCredentials: false
  })
}

export const saveTableBookData = (bookData) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/insertBook',
    bookData,
    method: 'post'
  })
}
