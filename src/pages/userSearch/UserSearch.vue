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
          <el-menu-item index="/userInfo">个人中心</el-menu-item>
          <el-menu-item index="/">退出登录</el-menu-item>
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
          <el-table-column prop="userIdCard" label="借书人身份证" width="180"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="handleBorrow(scope.row)">借书</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'UserSearch',
  data () {
    return {
      item: this.$store.state.bookInformation
    }
  },
  methods: {
    handleBorrow (row) {
      console.log(row.id)
      if (row.userIdCard !== null) {
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
</style>
