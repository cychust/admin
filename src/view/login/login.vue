<style lang="less">
@import './login.less';
</style>

<template>
  <div class="login">
    <div class="background"></div>
    <h1>图书管理系统</h1>
    <div class="login-con">
      <Card icon="log-in"
            title="欢迎登录"
            :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
          <a href="/register">
            <Button @click="toRegister">点击注册
            </Button>
          </a>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ username, password }) {
      this.handleLogin({ username, password }).then(res => {
        this.getUserInfo().then(res => {
          console.error('login success')
          this.$router.push({
            name: 'home'
          })
        })
        // console.error('3333')
        // this.$router.push({
        //   name: 'home'
        // })\
      }).catch(err => {
        this.$Message.error('网络错误')
        throw err
      })
    },
    toRegister () {
      this.$router.push({
        name: 'register'
      })
    }
  }
}
</script>

<style>
</style>
