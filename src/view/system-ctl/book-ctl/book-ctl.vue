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
import { getTableBookData, saveTableBookData } from '@/api/data'
export default {
  components: {
    Tables
  },
  data () {
    return {
      pageTotal: 100,
      columns: [
        {title: '书籍编号', key: 'id', sortable: true, require: true},
        {title: '书籍名称', key: 'book_name', sortable: true, editable: true, require: true},
        {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
        {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
        {title: '出版社', key: 'publish_horse', sortable: true},
        {title: '出版日期', key: 'publish_date', sortable: true},
        {title: '书籍页数', key: 'page_number', type: Number, sortable: true},
        {title: '备注信息', key: 'remarks', sortable: false},
        // {title: '出版日期', key: 'updateTime', sortable: true},
        {
          title: 'Handle',
          key: 'handle',
          fixed: 'right',
          width: 180,
          // options: ['delete'],
          button: [
            (h, params) => {
              return h('Button', {
                props: {'type': 'primary', 'size': 'small'},
                // style: {'width': '60px'},
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }}, '查看')
            },
            (h, params) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要保存吗?',
                  transfer: true
                },
                on: {
                  'on-ok': () => {
                    this.save(params.index)
                  }
                }
              }, [
                h('Button', {
                  props: {'type': 'primary', 'size': 'small'},
                  style: {'margin': '3px'}
                },
                '保存')
              ])
            },
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?',
                  transfer: true
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                    this.showSuccessMessage()
                  }
                }
              }, [
                h('Button', {
                  props: {'type': 'error', 'size': 'small'}
                  // style: {'width': '60px'}
                },
                '删除')
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
    save (index) {
      if (this.tableData[index].id == null || this.tableData[index].book_name == null) {
        this.$Message.error('保存失败')
      } else {
        const tableData = {
          id: this.tableData[index].id,
          bookName: this.tableData[index].book_name,
          bookCategory: this.tableData[index].book_category,
          authorName: this.tableData[index].author_name,
          publishHorse: this.tableData[index].publish_horse,
          publishDate: this.tableData[index].publish_date,
          pageNumber: this.tableData[index].page_namber,
          remarks: this.tableData[index].remarks
        }
        saveTableBookData(tableData).then(res => {
          this.$Message.success('保存成功')
        }).catch(err => {
          console.error(err)
        })
      }
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
      console.error(result.data.data)
      this.tableData = result.data.data
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
