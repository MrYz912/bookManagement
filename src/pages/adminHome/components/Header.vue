<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="black"
      router="true"
    >
      <el-menu-item index="/">退出登录</el-menu-item>
      <el-menu-item index="/editUsers">编辑用户信息</el-menu-item>
      <el-menu-item index="/editAdmins">编辑管理员信息</el-menu-item>
      <el-menu-item index="/addBooks">新增书籍</el-menu-item>
      <el-menu-item index="/addBooks">新增书籍种类</el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: 'AdminHeader'
}
</script>

<style lang="stylus" scoped>

</style>
