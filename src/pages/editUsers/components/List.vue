<template>
  <div>
    <el-table :data="this.item">
      <el-table-column prop="idCard" label="身份证号" width="200"></el-table-column>
      <el-table-column prop="account" label="账号" width="150"></el-table-column>
      <el-table-column prop="name" label="名字" width="100"></el-table-column>
      <el-table-column prop="phoneNumber" label="手机号" width="150"></el-table-column>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EdituList',
  data () {
    return {
      item: this.$store.state.userInformation,
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
  },
  mounted () {
    console.log('editusers:list')
    axios.get('/api/admins/users/1/1000', {
      headers: {
        Authorization: this.$store.state.adminToken
      }
    })
      .then(res => {
        console.log(res.data.records)
        this.$store.commit('changeUsers', res.data.records)
        this.item = this.$store.state.userInformation
      })
  }
}
</script>

<style lang="stylus" scoped>

</style>
