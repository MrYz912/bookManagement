<template>
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    height="1500">
    <template v-for="column in columnData">
      <el-table-column
      :key="column.id"
      v-bind="column"
      v-on="column"
      width="200">
        <template slot-scope="scope">
          <table-column-expand
            v-if="column.render"
            :row="scope.row"
            :column="column"
            :index="scope.$index"
            :render="column.render"
          />
          <span v-else>{{ scope.row[column.prop] }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'TableRender',
  props: {
    columnData: {type: Array, default: () => []}
  },
  components: {
    tableColumnExpand: {
      functional: true,
      props: {row: Object, column: Object, render: Function, index: Number},
      render (h, ctx) {
        const params = Object.assign({}, ctx.props)
        return ctx.props.render(h, params)
      }
    }
  }
}
</script>

<style>

</style>
