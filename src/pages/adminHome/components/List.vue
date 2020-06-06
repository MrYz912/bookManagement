<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="ISBN" label="ISBN" width="200"></el-table-column>
      <el-table-column prop="name" label="西游记" width="150"></el-table-column>
      <el-table-column prop="author" label="作者" width="150"></el-table-column>
      <el-table-column prop="publishingHouse" label="出版社" width="150"></el-table-column>
      <el-table-column label="操作" width="2000">
        <el-button-group>
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)" class="button">查看详情</el-button>
            <el-button type="warning" @click="handleBack(scope.$index, scope.row)" class="button">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" class="button">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AdminList',
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
    handleDelete (index, row) {
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
  .button
    padding 5
</style>
