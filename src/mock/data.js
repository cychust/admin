import Mock from 'mockjs'
import {
  doCustomTimes
} from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      id: '@id',
      name: '@name',
      email: '@email',
      createTime: '@date',
      updateTime: '@date',
      access: 'admin,super_admin'
    }))
  })
  return tableData
}
// {title: '书籍编号', key: 'id', sortable: true},
//         {title: '书籍名称', key: 'book_name', sortable: true, editable: true},
//         {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
//         {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
//         {title: '出版社', key: 'publish_horse', sortable: true},
//         {title: '出版日期', key: 'publish_date', sortable: true},
//         {title: '书籍页数', key: 'page_number', sortable: true},
//         {title: '备注信息', key: 'remarks', sortable: false},
export const getTableBookData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      id: '@increment',
      book_name: '@name',
      book_category: '科幻',
      author_name: '@name',
      publish_horse: '@zip',
      publish_date: '@date',
      page_number: '@integer',
      remarks: ' '
    }))
  })
  return tableData
}
export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}
