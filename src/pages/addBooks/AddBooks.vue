<template>
  <el-form ref="form" :model="form" label-width="80px" class="form">
    <el-form-item label="isbn">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="书名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="出版社">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="出版日期">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      >
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'AddBooks',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
