<template>
  <div>
    <el-button plain class="newButton">新增管理员</el-button>
    <edita-search></edita-search>
    <edita-list></edita-list>
  </div>
</template>

<script>
import EditaSearch from './components/Search'
import EditaList from './components/List'

export default {
  name: 'EditAdmins',
  components: {
    EditaSearch,
    EditaList
  }
}
</script>

<style lang="stylus" scoped>
  .newButton
    position absolute
    margin-left 100px
</style>
