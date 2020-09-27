<template>
  <div>
    <table-render
    :data="this.item"
    :columnData="this.column"
    >
    </table-render>
  </div>
</template>

<script>
import axios from 'axios'
import TableRender from '@/pages/tools/tableRender'
export default {
  name: 'AdminList',
  components: {TableRender},
  data () {
    return {
      item: this.$store.state.bookInformation,
      currentRow: null,
      templateRadio: '1',
      dialogFormVisible: false,
      column: [
        {prop: 'isbn', label: 'ISBN'},
        {prop: 'name', label: '书名'},
        {prop: 'author', label: '作者'},
        {prop: 'publisher', label: '出版社'},
        {prop: 'bookCategory.name', label: '分类'},
        {
          prop: 'operate',
          label: '操作',
          render: (h, {row, column}) => {
            return h('el-button', {width: '300'}, '编辑')
          }
        }
      ],
      form: {
        isbn: null,
        name: null,
        author: null,
        publisher: null,
        bookCategoryId: null
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    handleEdit (row) {
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      this.$route.push({
        path: '/detail'
      })
    }
  },
  mounted () {
    axios.get('/api/books/1/20')
      .then(res => {
        console.log('adminhome:list')
        this.$store.commit('changeBooks', res.data.records)
        this.item = this.$store.state.bookInformation
      })
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
  .button
    padding 5
</style>
