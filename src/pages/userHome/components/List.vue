<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="ISBN" label="ISBN" width="200"></el-table-column>
      <el-table-column prop="name" label="西游记" width="150"></el-table-column>
      <el-table-column prop="author" label="作者" width="150"></el-table-column>
      <el-table-column prop="publishingHouse" label="出版社" width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)" width="150">查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleBack(scope.$index, scope.row)" width="150">还书</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      tableData: [{
        ISBN: '9787532512003',
        name: '西游记',
        author: '吴承恩',
        publishingHouse: '上海古籍出版社'
      }, {
        ISBN: '7777532512003',
        name: '西游记',
        author: '吴承恩',
        publishingHouse: '上海古籍出版社'
      }, {
        ISBN: '8888532512003',
        name: '西游记',
        author: '吴承恩',
        publishingHouse: '上海古籍出版社'
      }, {
        ISBN: '9999532512003',
        name: '西游记',
        author: '吴承恩',
        publishingHouse: '上海古籍出版社'
      }],
      currentRow: null,
      templateRadio: '1'
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$route.push({
        path: '/detail'
      })
    },
    handleBack (index, row) {
      this.$route.push({
        path: '/detail'
      })
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    getTemplateRow (index, row) {
      this.templateSelection = row
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
</style>
