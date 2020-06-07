<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="black"
          router="true"
        >
          <el-menu-item index="/login">登录</el-menu-item>
          <el-menu-item index="/signUp">注册</el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <el-table :data="this.item">
          <el-table-column prop="id" label="ID" width="180"></el-table-column>
          <el-table-column prop="name" label="名字"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BookCategory',
  data () {
    return {
      item: {}
    }
  },
  mounted () {
    axios.get('/api/bookCategories/1/1000')
      .then(res => {
        this.item = res.data.records
      })
  }
}
</script>

<style lang="stylus" scoped>

</style>
