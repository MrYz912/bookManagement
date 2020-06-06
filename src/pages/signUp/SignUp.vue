<template>
  <div class="form">
    <header class="header">注册</header>
    <div class="contain">
      <el-form :label-position="labelPosition" label-width="60px" :model="formLabelAlign">
      <el-form-item label="身份证">
        <el-input v-model="formLabelAlign.idCard" placeholder="必填"></el-input>
      </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.account" placeholder="必填"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" show-password placeholder="必填"></el-input>
        </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="formLabelAlign.name" placeholder="必填"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formLabelAlign.phoneNumber" placeholder="选填"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formLabelAlign.email" placeholder="选填"></el-input>
      </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button @click="onSubmit" type="primary">注册</el-button>
            <router-link to="/">
              <el-button>取消</el-button>
            </router-link>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data () {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        idCard: null,
        account: null,
        password: null,
        name: null,
        phoneNumber: null,
        email: null
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')

      if (this.formLabelAlign.account === null || this.formLabelAlign.password === null ||
      this.formLabelAlign.idCard === null || this.formLabelAlign.name === null) {
        alert('必填不能为空')
      } else {
        console.log(this.formLabelAlign)
        axios.post('/api/users', this.formLabelAlign)
          .then(res => {
            console.log(res)
            this.userToken = res.headers.authorization
            console.log(this.userToken)

            this.$router.push('/login')

            alert('注册成功')
          })
          .catch(error => {
            alert('账号或密码错误')
            console.log(error)
          })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .form
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3)
    position absolute
    top 50%
    left 50%
    transform: translate(-50%,-50%)
    width 450px
    height 650px
    .contain
      width 300px
      margin 50px auto
    .header
      text-align center
      width 200px
      margin 50px auto 0
      font-weight bold
      font-size 25px
</style>
