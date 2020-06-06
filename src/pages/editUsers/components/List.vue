<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="id" label="身份证号" width="200"></el-table-column>
      <el-table-column prop="account" label="账号" width="150"></el-table-column>
      <el-table-column prop="password" label="密码" width="150"></el-table-column>
      <el-table-column prop="name" label="名字" width="100"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button-group>
            <el-button type="warning" @click="handleEdit(scope.$index, scope.row)" class="button">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" class="button">删除</el-button>
        </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      class="footer">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'EdituList',
  data () {
    return {
      tableData: [{
        id: '440181195307241112',
        account: '3456',
        password: '123456',
        phone: '13656783421',
        name: '张三',
        email: '75642314@qq.com'
      }, {
        id: '440181195307241112',
        account: '3456',
        password: '123456',
        phone: '13656783421',
        name: '张三',
        email: '75642314@qq.com'
      }, {
        id: '440181195307241112',
        account: '3456',
        password: '123456',
        phone: '13656783421',
        name: '张三',
        email: '75642314@qq.com'
      }, {
        id: '440181195307241112',
        account: '3456',
        password: '123456',
        phone: '13656783421',
        name: '张三',
        email: '75642314@qq.com'
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
    handleDelete (index, row) {
      this.$route.push({
        path: '/detail'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
    margin-top 30px
</style>
