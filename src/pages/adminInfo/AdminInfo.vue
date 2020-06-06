<template>
  <el-form ref="form" :model="form" label-width="80px" class="form">
    <el-form-item label="账号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名字">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'AdminInfo',
  data () {
    return {
      form: {
        name: null,
        region: null,
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: null,
        desc: null
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
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
