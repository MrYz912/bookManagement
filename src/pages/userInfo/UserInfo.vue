<template>
  <el-form ref="form" :model="form" label-width="80px" class="form">
    <el-form-item label="身份证号">
      <el-input v-model="form.idCard" disabled=""></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="form.account" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" clearable show-password></el-input>
    </el-form-item>
    <el-form-item label="名字">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.phoneNumber" clearable></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <router-link to="/userHome">
        <el-button>取消</el-button>
      </router-link>
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
      axios.put('/api/users', this.form, {
        headers: {
          Authorization: this.$store.state.userToken
        }
      })
      alert('修改成功')
      this.$store.commit('changeuLogin', null)
      this.$router.push('/login')
    }
  },
  mounted () {
    axios.get('/api/users/self', {
      headers: {
        Authorization: this.$store.state.userToken
      }
    })
      .then(res => {
        this.form = res.data
        console.log('infoPassword', this.form.password)
        this.form.password = null
        console.log(this.form.password)
        console.log(this.form)
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
