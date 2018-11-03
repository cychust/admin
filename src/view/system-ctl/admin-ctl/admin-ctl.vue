<template>
  <div>
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
              @click="addAdmin">添加管理员</Button>
    </Card>
  </div>
</template>
<script>
import Tables from '_c/tables'
import { getAdminListData } from '@/api/data'
import { adminListDataMerge } from '@/libs/util'
export default {
  components: {
    Tables
  },
  data () {
    return {
      stripe: true,
      nameEditable: false,
      emailEditable: false,
      columns: [
        {title: 'ID', key: 'id', sortable: true},
        {title: '角色名称', key: 'username', sortable: true, editable: true},
        {title: '权限', key: 'roles', editable: true},
        {title: '创建时间', key: 'createTime', editable: true},
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
    addAdmin () {
      const initData = {
        id: this.tableData.length + 1,
        username: 'ccc',
        access: ['super_admin', 'admin'],
        createTime: new Date()
      }
      this.tableData.push(initData)
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
            }, [
              h('div', [`ID     ：${this.tableData[index].id}`]),
              h('Divider'),
              h('div', [`角色名称：${this.tableData[index].username}`]),
              h('Divider'),
              h('div', [`创建时间 ：${this.tableData[index].createTime}`]),
              h('Divider'),
              h('div', [`权限    ：${this.tableData[index].roles}`])
            ])])
        }
      })
    }
  },
  mounted () {
    getAdminListData().then(result => {
      console.error(result.data)
      var data = adminListDataMerge(result.data.data)
      this.tableData = data
      console.error(data)
    }).catch(err => {
      console.error('获取数据失败')
      this.$Message.error('获取数据失败')
      throw err
    })
  }
}
</script>
<style>
.s {
}
</style>
