<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="black"
          router="true"
        >
          <el-menu-item index="/userInfo">个人中心</el-menu-item>
          <el-menu-item index="/">退出登录</el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="ISBN" label="ISBN" width="200"></el-table-column>
          <el-table-column prop="name" label="西游记" width="150"></el-table-column>
          <el-table-column prop="author" label="作者" width="150"></el-table-column>
          <el-table-column prop="publishingHouse" label="出版社" width="150"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">借书</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          class="footer">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    const item = {
      ISBN: '9787532512003',
      name: '西游记',
      author: '吴承恩',
      publishingHouse: '上海古籍出版社'
    }
    return {
      tableData: Array(10).fill(item),
      total: '100'
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$route.push({
        path: '/detail'
      })
    },
    handleBorrow (index, row) {
      this.$route.push({
        path: '/detail'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width 400px
    margin auto
</style>
