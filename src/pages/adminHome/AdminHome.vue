<template>
  <div>
    <el-container>
      <el-header>
        <admin-header></admin-header>
      </el-header>

      <el-main>
        <admin-search></admin-search>
        <admin-list></admin-list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AdminHeader from './components/Header'
import AdminSearch from './components/Search'
import AdminList from './components/List'

export default {
  name: 'AdminHome',
  components: {
    AdminHeader,
    AdminSearch,
    AdminList
  }
}
</script>

<style lang="stylus" scoped>

</style>
