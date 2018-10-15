<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator" />
      <Icon :size="18"
            type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="userInfo">个人信息</DropdownItem>
        <DropdownItem name="">待办事物</DropdownItem>
        <Divider class="divider" />
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
              name: 'login'
            })
          })
          break
        case 'userInfo':
          this.$router.push({
            name: 'home'
          })
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import './user.less';
</style>
