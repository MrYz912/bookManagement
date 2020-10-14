<template>
  <div>
    <el-contain>
      <el-header>
        <user-header></user-header>
      </el-header>

      <el-main>
        <user-search></user-search>
        <user-list></user-list>
      </el-main>
    </el-contain>
  </div>
</template>

<script>
import UserHeader from './components/Header'
import UserSearch from './components/Search'
import UserList from './components/List'

export default {
  name: 'UserHome',
  components: {
    UserHeader,
    UserSearch,
    UserList
  }
}
</script>

<style lang="stylus" scoped>

</style>
