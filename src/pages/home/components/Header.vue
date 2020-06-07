<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="black"
    router="true"
  >
    <el-menu-item index="/login">登录</el-menu-item>
    <el-menu-item index="/signup">注册</el-menu-item>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/bookCategory">书籍分类</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>

</style>
