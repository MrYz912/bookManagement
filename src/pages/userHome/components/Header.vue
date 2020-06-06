<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="black"
    router="true"
  >
    <el-menu-item index="/">退出</el-menu-item>
    <el-menu-item index="/userInfo">个人信息</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style lang="stylus" scoped>

</style>
