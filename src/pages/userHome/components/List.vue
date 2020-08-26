<template>
  <div>
    <el-table :data="tableData">
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="isbn" label="ISBN" width="180"></el-table-column>
          <el-table-column prop="name" label="书名" width="130"></el-table-column>
          <el-table-column prop="author" label="作者" width="130"></el-table-column>
          <el-table-column prop="publisher" label="出版社" width="180"></el-table-column>
          <el-table-column prop="bookCategory.name" label="分类" width="130"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleBack(scope.row)">还书</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserList',
  data () {
    return {
      tableData: this.$store.state.bookInformation,
      currentRow: null,
      templateRadio: '1'
    }
  },
  methods: {
    handleBack (row) {
      console.log(row.id)
      console.log(this.$store.state.userToken)
      axios.get('/api/users/books/giveBack/' + row.id, {
        headers: {
          Authorization: this.$store.state.userToken
        }
      })
        .then((res) => {
          console.log(res)
          alert('还书成功')
          this.$router.go(0)
        })
        .catch(error => {
          alert('还书失败')
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
</style>
