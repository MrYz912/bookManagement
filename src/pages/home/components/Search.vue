<template>
<div class="input">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" class="select">
      <el-option label="名字" value="name"></el-option>
      <el-option label="作者" value="author"></el-option>
      <el-option label="分类" value="category"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="goto">搜索</el-button>
  </el-input>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      input: null,
      select: null
    }
  },
  methods: {
    goto () {
      axios.post('/api/books/search/1/1000', {
        sort: this.select,
        search: this.input
      })
        .then(res => {
          console.log(res)
          this.$store.commit('changeBooks', res.data.records)
          console.log('search', this.$store.state.bookInformation)
          this.$router.push('/list')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input
    position absolute
    top 50%
    left 50%
    transform: translate(-50%,-50%)
    .input-with-select
      width 650px
      .select
        width 130px
</style>
