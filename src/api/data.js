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

export const getSearchData = (keyword) => {
  // console.error('in1')
  return axios.request({
    url: 'https://sug.so.360.cn/suggest?word=' + keyword + '&encodein=utf-8&encodeout=utf-8'
    // method: 'get'
    // withCredentials: false
  })
}

// user api

export const registerUser = (tableData) => {
  return axios.request({
    url: 'http://localhost:9966/api/register?username=' + tableData.userName + '&password=' + tableData.password + '&email=' + tableData.email,
    method: 'post'
  })
}

export const getAdminListData = () => {
  return axios.request({
    url: 'http://localhost:9966/api/userList',
    method: 'get'
  })
}

// order api
export const updateOrder = (orderId, finishedTime) => {
  return axios.request({
    url: 'http://localhost:9966/api/updateOrder?order_id=' + orderId + '&finished_time=' + finishedTime,
    method: 'put'
  })
}

export const orderLists = () => {
  return axios.request({
    url: 'http://localhost:9966/api/orderList',
    method: 'get'
  })
}

export const addOrder = (isbn, bookName, orderUsername, createTime) => {
  return axios.request({
    url: 'http://localhost:9966/api/addOrder?isbn=' + isbn + '&book_name=' + bookName + '&order_username=' + orderUsername + '&create_time=' + createTime,
    method: 'post'
  })
}

// book api

export const bookList = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList',
    method: 'get'
  })
}

export const bookHorseList = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookHorseList',
    method: 'get'
  })
}

export const updateBook = (bookName, id) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/updateBook?bookName=' + bookName + '&id=' + id,
    method: 'put'
  })
}

export const insertBook = (tableData) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/insertBook?isbn=' + tableData.id + '&bookName=' +
      tableData.bookName + '&bookCategory=' + tableData.bookCategory + '&authorName=' + tableData.authorName +
      '&publishHorse=' + tableData.publishHorse + '&publishDate=' +
      tableData.publishDate + '&pageNumber=' + tableData.pageNumber + '&remarks=' + tableData.remarks + ' ',
    method: 'put'
  })
}

export const saveTableBookData = (bookData) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/insertBook',
    bookData,
    method: 'post'
  })
}

export const getTableBookData = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList',
    method: 'get'
  })
}
