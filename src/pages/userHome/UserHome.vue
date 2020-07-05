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
import axios from 'axios'

export default {
  name: 'UserHome',
  components: {
    UserHeader,
    UserSearch,
    UserList
  },
  mounted () {
    console.log(this.$store.state.userToken)
    axios.get('/api/users/books/1/1000', {
      headers: {
        Authorization: this.$store.state.userToken
      }
    })
      .then(res => {
        this.$store.commit('changeBooks', res.data.records)
        console.log('userHome', this.$store.state.bookInformation)
      })
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
