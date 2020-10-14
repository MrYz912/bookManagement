<template>
  <div>
    <el-table :data="this.item">
      <el-table-column prop="id" label="id" width="200"></el-table-column>
      <el-table-column prop="account" label="账号" width="200"></el-table-column>
      <el-table-column prop="name" label="名字" width="200"></el-table-column>
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
  name: 'EditaList',
  data () {
    return {
      item: this.$store.state.adminInformation,
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
    axios.get('/api/admins/1/1000', {
      headers: {
        Authorization: this.$store.state.adminToken
      }
    })
      .then(res => {
        console.log(res.data.records)
        this.$store.commit('changeAdmins', res.data.records)
        this.item = this.$store.state.adminInformation
      })
  }
}
</script>

<style lang="stylus" scoped>

</style>
