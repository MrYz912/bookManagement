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
          <el-menu-item index="/login">登录/注册</el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <el-container>
      <el-aside width="270px">
        <img src="https://img3.doubanio.com/view/subject/s/public/s1154230.jpg" class="img">
      </el-aside>

      <el-main>
        <el-card class="box-card">
          <div v-for="(value, key) in specific" :key="key">
            {{key}}-----{{value}}
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      specific: {
        id: '1',
        isbn: '9787532512003',
        name: '西游记',
        author: '吴承恩',
        publishingHouse: '上海古籍出版社',
        bookCategeory: '古典小说'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .img
    margin-top 40px
    margin-left 50px
  .box-card
    margin-top 40px
    width 900px
</style>
