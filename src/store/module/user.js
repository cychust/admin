import {
  login,
  logout,
  getUserInfo
} from '@/api/user'
import {
  setToken,
  getToken
} from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: ''
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      // console.error('setusername')
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin ({
      commit
    }, {
      username,
      password
    }) {
      // userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          const data = res.data
          commit('setToken', data.data.token)
          // commit('setUserName', data.user_name)
          console.error(data)
          console.error(data.data.token)
          resolve()
        }).catch(err => {
          console.error('2222')
          reject(err)
          console.error('login failer')
        })
      })
    },
    // 退出登录
    handleLogOut ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('setToken', '')
        //   commit('setAccess', [])
        //   console.error(state.access)
        //   console.error(state.userName)
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        // getUserInfo(state.token).then(res => {
        //   const data = res.data
        //   commit('setAvator', data.avator)
        //   // commit('setUserName', data.user_name)
        //   commit('setUserName', data.name)
        //   commit('setUserId', data.user_id)
        //   commit('setAccess', data.access)
        //   // console.error(data)
        //   resolve(data)
        // }).catch(err => {
        //   reject(err)
        // })
        commit('setAccess', ['admin', 'super_admin'])
        resolve()
      })
    }
  }
}
