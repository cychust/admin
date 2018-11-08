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
              stripe
              @on-delete="handleDelete" />

      <Button style="margin: 10px 0;"
              type="primary"
              @click="exportExcel">导出为Csv文件</Button>
      <Button style="margin: 10px 5px;"
              type="error"
              @click="addAdmin">添加书籍</Button>

      <Page :total="pageTotal"
            show-elevator
            show-total
            class="page"></Page>
    </Card>
  </div>
</template>
<script>
import Tables from '_c/tables'
import { getTableBookData, insertBook } from '@/api/data'
export default {
  components: {
    Tables
  },
  data () {
    return {
      stripe: true,
      pageTotal: 100,
      columns: [
        {title: '书籍编号', key: 'id', sortable: true, require: true, editable: true},
        {title: '书籍名称', key: 'book_name', sortable: true, editable: true, require: true},
        {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
        {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
        {title: '出版社', key: 'publish_horse', sortable: true, editable: true},
        {title: '出版日期', key: 'publish_date', sortable: true, editable: true},
        {title: '书籍页数', key: 'page_number', sortable: true, editable: true},
        {title: '是否被借', key: 'borrowed', sortable: true, editable: true},
        {title: '备注信息', key: 'remarks', sortable: false, editable: true},
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
        id: this.tableData.length + 1,
        book_name: '计算机科学与技术',
        book_category: 'science',
        author_name: 'cyc',
        publish_horse: '华中科技大学出版社',
        publish_date: new Date(),
        page_number: '111',
        borrowed: '否',
        remarks: '无'
      }
      this.tableData.push(initData)
    },
    showSuccessMessage () {
      this.$Message.success('删除成功')
    },
    save (index) {
      if (this.tableData[index].id == null || this.tableData[index].book_name == null) {
        this.$Message.error('书籍编号和书名必填')
      } else {
        const tableData = {
          id: this.tableData[index].id,
          bookName: this.tableData[index].book_name,
          bookCategory: this.tableData[index].book_category,
          authorName: this.tableData[index].author_name,
          publishHorse: this.tableData[index].publish_horse,
          publishDate: this.tableData[index].publish_date,
          pageNumber: this.tableData[index].page_number,
          remarks: this.tableData[index].remarks
        }
        insertBook(tableData).then(res => {
          console.error(res.data.code)
          if (res.data.code == '300') { this.$Message.error('书籍已存在,保存失败') } else { this.$Message.success('保存成功') }
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

            }, ['图书信息']),
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
              h('div', [`书籍页数：${this.tableData[index].page_number}`]),
              h('Divider'),
              h('div', [`是否被借：${this.tableData[index].borrowed}`]),
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
      this.tableData.forEach((item) => {
        if (item.borrowed === false) {
          item.borrowed = '否'
        } else {
          item.borrowed = '是'
        }
      })
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
