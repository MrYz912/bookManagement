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
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="isbn" label="ISBN" width="180"></el-table-column>
          <el-table-column prop="name" label="书名" width="130"></el-table-column>
          <el-table-column prop="author" label="作者" width="130"></el-table-column>
          <el-table-column prop="publisher" label="出版社" width="130"></el-table-column>
          <el-table-column prop="bookCategory.name" label="分类" width="130"></el-table-column>
          <el-table-column prop="userIdCard" label="借书人身份证"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      item: this.$store.state.bookInformation
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
