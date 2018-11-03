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

      <Button style="margin: 10px 0;"
              type="primary"
              @click="exportExcel">导出为Csv文件</Button>
      <Button style="margin: 10px 5px;"
              type="error"
              @click="addAdmin">添加订单</Button>
      <Page :total="pageTotal"
            show-elevator
            show-total
            class="page"></Page>
    </Card>
  </div>
</template>
<script>
import Tables from '_c/tables'
import { orderLists, addOrder, updateOrder } from '@/api/data'
export default {
  components: {
    Tables
  },
  data () {
    return {
      pageTotal: 100,
      columns: [
        {title: '订单ID', key: 'orderId', sortable: true},
        {title: '书籍ID', key: 'isbn', sortable: true, editable: false},
        {title: '书籍名', key: 'bookName', editable: false, sortable: true},
        {title: '创建时间', key: 'createTime', editable: false, sortable: true},
        {title: '借书人', key: 'orderUsername', sortable: true},
        {title: '订单完成时间', key: 'finishedTime', sortable: true},
        {title: '订单是否完成', key: 'isFinished', sortable: true},
        // {title: '出版日期', key: 'updateTime', sortable: true},
        {
          title: 'Handle',
          key: 'handle',
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
                    console.error(params.index)
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
    addAdmin () {
      const initData = {
        orderId: this.tableData.length + 1,
        isbn: 1,
        bookName: '计算机科学与技术',
        createTime: new Date(),
        orderUsername: 'cyc',
        finishedTime: new Date(),
        isFinished: '否'
      }
      this.tableData.push(initData)
    },
    showSuccessMessage () {
      this.$Message.success('删除成功')
    },
    save (index) {
      if (this.tableData[index].orderId == null || this.tableData[index].isbn == null) {
        this.$Message.error('保存失败')
      } else {
        const tableData = {
          id: this.tableData[index].orderId,
          isbn: this.tableData[index].isbn,
          book_name: this.tableData[index].bookName,
          create_time: this.tableData[index].createTime,
          order_username: this.tableData[index].orderUsername,
          finished_time: this.tableData[index].finishedTime,
          is_finished: this.tableData[index].isFinished
          // remarks: this.tableData[index].remarks
        }
        addOrder(tableData.isbn, tableData.book_name, tableData.order_username, tableData.create_time).then(res => {
          this.$Message.success('保存成功')
        }).catch(err => {
          console.error(err)
        })
      }
    },
    show (index) {
      this.$Modal.info({
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
              h('div', [`书籍名称：${this.tableData[index].isbn}`]),
              h('Divider'),
              h('div', [`书籍类别：${this.tableData[index].book_name}`]),
              h('Divider'),
              h('div', [`作者姓名：${this.tableData[index].create_time}`]),
              h('Divider'),
              h('div', [`出版社：${this.tableData[index].order_username}`]),
              h('Divider'),
              h('div', [`出版日期：${this.tableData[index].finished_time}`]),
              h('Divider'),
              h('div', [`书籍页数：${this.tableData[index].is_finished}`])
            ])])
        }
      })
    }
  },
  mounted () {
    orderLists().then(result => {
      this.tableData = result.data.data
      this.tableData.forEach((item) => {
        if (!item.isFinished) {
          item.isFinished = '否'
        }
      })
      // console.error(result.data.data)
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
