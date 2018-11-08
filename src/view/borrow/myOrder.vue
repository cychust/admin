<template>
  <div>
    <Table border
           :columns="columns"
           :data="order"
           size="large"
           no-data-text="你还有借书记录，快点去借书吧"></Table>
    <div class="page-size">
      <Page :total="100"
            show-sizer></Page>
    </div>
  </div>
</template>

<script>
import { orderLists } from '@/api/data'
export default {
  name: 'MyOrder',
  data () {
    return {
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
        } else {
          item.isFinished = '是'
        }
        item.img = 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/1.jpg'
      })
      // console.error(result.data.data)
    })
  }
}
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
