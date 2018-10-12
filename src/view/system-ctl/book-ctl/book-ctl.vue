<template>
  <div class="bookCtl">
    <Card>
      <tables ref="tables"
              editable
              searchable
              search-place="top"
              v-model="tableData"
              :columns="columns"
              boder
              @on-delete="handleDelete" />

      <Page :total="pageTotal"
            show-elevator
            show-total
            class="page"></Page>
    </Card>
  </div>
</template>
<script>
import Tables from '_c/tables'
import { getTableBookData } from '@/api/data'
export default {
  components: {
    Tables
  },
  data () {
    return {
      pageTotal: 100,
      columns: [
        {title: '书籍编号', key: 'id', sortable: true},
        {title: '书籍名称', key: 'book_name', sortable: true, editable: true},
        {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
        {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
        {title: '出版社', key: 'publish_horse', sortable: true},
        {title: '出版日期', key: 'publish_date', sortable: true},
        {title: '书籍页数', key: 'page_number', sortable: true},
        {title: '备注信息', key: 'remarks', sortable: false},
        // {title: '出版日期', key: 'updateTime', sortable: true},
        {
          title: 'Handle',
          key: 'handle',
          // options: ['delete'],
          button: [
            (h, params) => {
              return h('Button', {
                props: {'type': 'primary'},
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }}, '查看')
            },
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                    this.showSuccessMessage()
                  }
                }
              }, [
                h('Button', {props: {'type': 'error'}, style: {'width': 'auto'}}, '删除')
              ])
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    showSuccessMessage () {
      this.$Message.success('删除成功')
    },
    show (index) {
      this.$Modal.info({
        // title: '管理员信息',
        // content:
        // `ID:${this.tableData[index].id}<br>
        // 角色名称:${this.tableData[index].name}<br>
        // Email:${this.tableData[index].email}<br>
        // 权限:${this.tableData[index].access}<br>
        // 创建时间:${this.tableData[index].createTime}<br>
        // 更改时间:${this.tableData[index].updateTime}`
        render: (h) => {
          return h('div', {
            style: {
              textAlign: 'left'
            }
          }, [
            h('h3', {
              style: {
                width: '100px',
                left: '50%'
                // mar: auto
              }

            }, ['管理员信息']),
            h('Card', {
              props: {
                'style':
                'text-align: center'
              }
              //       {title: '书籍编号', key: 'id', sortable: true},
              // {title: '书籍名称', key: 'book_name', sortable: true, editable: true},
              // {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
              // {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
              // {title: '出版社', key: 'publish_horse', sortable: true},
              // {title: '出版日期', key: 'publish_date', sortable: true},
              // {title: '书籍页数', key: 'page_number', sortable: true},
              // {title: '备注信息', key: 'remarks', sortable: false},
            }, [
              h('div', [`书籍编号：${this.tableData[index].id}`]),
              h('Divider'),
              h('div', [`书籍名称：${this.tableData[index].book_name}`]),
              h('Divider'),
              h('div', [`书籍类别：${this.tableData[index].book_category}`]),
              h('Divider'),
              h('div', [`作者姓名：${this.tableData[index].author_name}`]),
              h('Divider'),
              h('div', [`出版社：${this.tableData[index].publish_horse}`]),
              h('Divider'),
              h('div', [`出版日期：${this.tableData[index].publish_date}`]),
              h('Divider'),
              h('div', [`书籍页数：${this.tableData[index].page_namber}`]),
              h('Divider'),
              h('div', [`备注信息：${this.tableData[index].remarks}`])
            ])])
        }
      })
    }
  },
  mounted () {
    getTableBookData().then(result => {
      this.tableData = result.data
    })
  }
}
</script>
<style>
.page {
  margin-top: 20px;
  margin-bottom: 20px;
  /* margin: 'auto'; */
  text-align: center;
}
</style>
