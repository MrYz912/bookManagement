<template>
  <div>
    <el-button plain class="newButton">新增用户</el-button>
    <editu-search></editu-search>
    <editu-list></editu-list>
  </div>
</template>

<script>
import EdituSearch from './components/Search'
import EdituList from './components/List'

export default {
  name: 'EditUsers',
  components: {
    EdituSearch,
    EdituList
  }
}
</script>

<style lang="stylus" scoped>
  .newButton
    position absolute
    margin-left 100px
</style>
