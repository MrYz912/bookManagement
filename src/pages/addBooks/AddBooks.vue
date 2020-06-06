<template>
  <el-form ref="form" :model="form" label-width="80px" class="form">
    <el-form-item label="isbn">
      <el-input v-model="form.isbn"></el-input>
    </el-form-item>
    <el-form-item label="书名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="出版社">
      <el-input v-model="form.publisher"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-input v-model="form.bookCategoryId"></el-input>         <!-- 这里需要后台获取 所有的 BookCategory -->
    </el-form-item>
    <!-- <el-form-item label="出版日期">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      >
    </el-date-picker>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddBooks',
  data () {
    return {
      form: {
        isbn: null,
        name: null,
        author: null,
        publisher: null,
        bookCategoryId: null
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      console.log('addbooks' + this.$store.state.adminToken)
      axios.post('/api/admins/books', this.form, {
        headers: {
          Authorization: this.$store.state.adminToken
        }
      })
        .then(res => {
          console.log(res)

          alert('添加成功')
          this.$router.push('/adminHome')
        })
        .catch(error => {
          alert('书籍信息不符合规范')
          console.log(error)
        })
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
