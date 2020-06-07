<template>
  <div>
    <el-table :data="this.item">
      <el-table-column prop="isbn" label="ISBN" width="200"></el-table-column>
      <el-table-column prop="name" label="书名" width="150"></el-table-column>
      <el-table-column prop="author" label="作者" width="150"></el-table-column>
      <el-table-column prop="publisher" label="出版社" width="150"></el-table-column>
          <el-table-column prop="bookCategory.name" label="分类" width="130"></el-table-column>
      <el-table-column label="操作" width="2000">
        <el-button-group>
            <el-button type="warning" @click="handleBack(scope.$index, scope.row)" class="button">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" class="button">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminList',
  data () {
    return {
      item: this.$store.state.bookInformation,
      currentRow: null,
      templateRadio: '1'
    }
  },
  methods: {
    handleBack (index, row) {
      this.$route.push({
        path: '/detail'
      })
    },
    handleDelete (index, row) {
      this.$route.push({
        path: '/detail'
      })
    }
  },
  mounted () {
    axios.get('/api/books/1/1000')
      .then(res => {
        console.log('adminhome:list')
        this.$store.commit('changeBooks', res.data.records)
        this.item = this.$store.state.bookInformation
      })
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
  .button
    padding 5
</style>
