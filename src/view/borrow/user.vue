<template>
  <div>
    <div class="user">
      <Card :bordered="false"
            class="card"
            :style="{ width:'60%' }">
        <Avatar class="person-icon"
                icon="ios-person"
                size="large"
                :style="{ width:'100px',height:'100px' }" />
        <p>用户姓名： {{user.username}}</p>
        <p>用户姓名： {{user.username}}</p>
        <p>用户姓名： {{user.username}}</p>
        <p>用户姓名： {{user.username}}</p>
        <p>用户姓名： {{user.username}}</p>
        <p>用户姓名： {{user.username}}</p>
      </Card>
    </div>
    <Divider></Divider>
    <ReturnBook></ReturnBook>
  </div>
</template>

<script>
import ReturnBook from './returnBook'
import { orderLists, addOrder, updateOrder } from '@/api/data'
export default {
  name: 'MyOrder',
  components: {
    ReturnBook
  },
  data () {
    return {
      user: {
        username: 'cyc'
      },
      order: [{
        // orderId: this.tableData.length + 1,
        // isbn: 1,
        // bookName: '计算机科学与技术',
        // createTime: new Date(),
        // orderUsername: 'cyc',
        // finishedTime: new Date(),
        // isFinished: '否'
        orderId: 1529931938150,
        isbn: 1529931938150,
        bookName: '计算机',
        img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/1.jpg',
        orderUsername: '4.7英寸-深邃蓝',
        finishedTime: 28,
        isFinished: '否',
        createTime: '2018-06-06 20:06:08'
      }],
      columns: [
        {
          title: '订单号',
          key: 'orderId',
          width: 180,
          align: 'center'
        },
        {
          title: 'isbn',
          key: 'isbn',
          width: 180,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ])
          },
          align: 'center'
        },
        {
          title: '书籍名字',
          key: 'bookName',
          width: 198,
          align: 'center'
        },
        {
          title: '书籍作者',
          width: 198,
          key: 'orderUsername',
          align: 'center'
        },
        {
          title: '借书时间',
          key: 'createTime',
          width: 198,
          align: 'center'
        },
        {
          title: '还书日期',
          width: 198,
          key: 'finishedTime',
          align: 'center'
        },
        {
          title: '订单是否完成',
          // width: 120,
          key: 'isFinished',
          align: 'center'
        }
      ]
    }
  },
  methods: {

  },
  mounted () {
    orderLists().then(result => {
      this.order = result.data.data
      this.order.forEach((item) => {
        if (!item.isFinished) {
          item.isFinished = '否'
        }
        item.img = 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/1.jpg'
      })
      // console.error(result.data.data)
    })
  }
}
</script>

<style scoped>
.user {
  position: relative;
  /* margin: 0; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.card {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-top: 20px;
}
.user p {
  margin: 10px;
  size: 20px;
}
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
