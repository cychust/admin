import axios from '@/libs/api.request'

export const login = ({
  username,
  password
}) => {
  const data = {
    username,
    password
  }
  // let param = new URLSearchParams()
  // param.append('username', 'cyc')
  // param.append('password', 'cyc')
  // console.error('1111111')
  // console.error(data)
  return axios.request({
    url: 'http://47.106.202.38:8010/api/auth/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  // return axios.request({
  //   url: 'get_info',
  //   params: {
  //     token
  //   },
  //   method: 'get'
  // })
}

export const logout = (token) => {
  // return axios.request({
  //   url: 'logout',
  //   method: 'post'
  // })
}
