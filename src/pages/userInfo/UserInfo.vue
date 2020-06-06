<template>
  <el-form ref="form" :model="form" label-width="80px" class="form">
    <el-form-item label="身份证号">
      <el-input :model="form.idCard"></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input :model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input :model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="名字">
      <el-input :model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input :model="form.phoneNumber"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input :model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserInfo',
  data () {
    return {
      form: {
        idCard: '',
        account: '',
        password: '',
        name: '',
        phoneNumber: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
    }
  },
  mounted () {
    console.log('userInfo')
    console.log(this.$store.state.userToken)
    axios.get('/api/users/self', {
      headers: {
        Authorization: this.$store.state.userToken
      }
    })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .form
    position absolute
    top 50%
    left 50%
    transform: translate(-50%,-50%)
</style>
