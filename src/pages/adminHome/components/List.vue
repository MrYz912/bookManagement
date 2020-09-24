<template>
  <div>
    <el-table :data="this.item">
      <el-table-column prop="isbn" label="ISBN" width="200"></el-table-column>
      <el-table-column prop="name" label="书名" width="150"></el-table-column>
      <el-table-column prop="author" label="作者" width="150"></el-table-column>
      <el-table-column prop="publisher" label="出版社" width="150"></el-table-column>
      <el-table-column prop="bookCategory.name" label="分类" width="130"></el-table-column>
      <el-table-column label="操作" width="2000">
        <el-button-group>
          <template slot-scope="scope">
            <el-button type="warning" @click="handleEdit(scope.row)" class="button">编辑</el-button>
            <el-dialog title="修改书籍" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="isbn">
                  <el-input v-model="form.isbn" clearable></el-input>
                </el-form-item>
                <el-form-item label="书名">
                  <el-input v-model="form.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="作者">
                  <el-input v-model="form.author" clearable ></el-input>
                </el-form-item>
                <el-form-item label="出版社">
                  <el-input v-model="form.publisher" clearable></el-input>
                </el-form-item>
                <el-form-item label="分类">
                  <el-input v-model="form.bookCategoryId" clearable></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)" class="button">删除</el-button>
          </template>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminList',
  data () {
    return {
      item: this.$store.state.bookInformation,
      currentRow: null,
      templateRadio: '1',
      dialogFormVisible: false,
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
    axios.get('/api/books/1/1000')
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
