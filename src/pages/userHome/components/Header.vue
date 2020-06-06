<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="black"
    router="true"
  >
    <el-menu-item index="/userInfo">个人中心</el-menu-item>
    <el-menu-item index="/" @click="exit">退出登录</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'UserHeader',
  methods: {
    exit () {
      this.$store.commit('changeuLogin', null)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
