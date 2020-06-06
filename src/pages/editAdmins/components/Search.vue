<template>
<div class="input">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" class="select">
      <el-option label="账号" value="1"></el-option>
      <el-option label="名字" value="2"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="goto">搜索</el-button>
  </el-input>
</div>
</template>

<script>
export default {
  name: 'EditaSearch',
  data () {
    return {
      input: '',
      select: ''
    }
  },
  methods: {
    goto () {
      this.$route.push({
        path: '/list'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input
    width 700px
    margin auto
    margin-top 50px
    .input-with-select
      width 650px
      .select
        width 130px
</style>
