<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
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
import axios from 'axios'
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
      console.log(this.$store.state.userToken)
      if (row.userIdCard === null) {
        axios.get('/api/users/books/borrow/' + row.id, {
          headers: {
            Authorization: this.$store.state.userToken
          }
        }).then((res) => {
          console.log(res)
          this.$router.push('/userHome')
        })
      } else {
        alert('该书已借出')
      }
    }
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
