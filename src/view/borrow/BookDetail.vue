<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="contrainer">

      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="goodsInfo.goodsImg[imgIndex]"
               alt="">
        </div>
        <div class="item-detail-img-row">
          <div class="item-detail-img-small"
               v-for="(item, index) in goodsInfo.goodsImg"
               :key="index"
               @mouseover="showBigImg(index)">
            <img :src="item"
                 alt="">
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <span class="item-detail-express">校园配送</span> {{bookInfo.bookName}}</p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">书籍作者</span>
                <span class="item-price">{{bookInfo.authorName}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">书籍页数</span>
                <span class="item-price">{{bookInfo.pageNumber}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">出版社　</span>
                <span class="item-price">{{bookInfo.publishHorse}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计出借</p>
              <p>
                <span class="item-remarks-num">{{goodsInfo.remarksNum}} 条</span>
              </p>
            </div>
          </div>
        </div>
        <p v-if="isBorrowed"
           class="book-status">书　已　被　借</p>
        <Button type="primary"
                shape="circle"
                class="borrow_btn"
                @click="borrowBook()"
                :disabled="isBorrowed">借书</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import {loadGoodsInfo, loadBookInfo, mergeBookInfo, borrowBookApi} from '@/api/data'
export default {
  name: 'BookDetail',
  data () {
    return {
      id: 2,
      username: 'cyc',
      goodsInfo: {},
      bookInfo: {},
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
      isBorrowed: false
    }
  },
  methods: {
    borrowBook () {
      borrowBookApi(this.bookInfo).then((res) => {
        this.isBorrowed = true
        this.$Message.info('成功')
      })
    },
    select (index1, index2) {
      this.selectBoxIndex = index1 * 3 + index2
      this.price = this.goodsInfo.setMeal[index1][index2].price
    },
    showBigImg (index) {
      this.imgIndex = index
    },
    addShoppingCartBtn () {
      const index1 = parseInt(this.selectBoxIndex / 3)
      const index2 = this.selectBoxIndex % 3
      const date = new Date()
      const goodsId = date.getTime()
      const data = {
        goods_id: goodsId,
        title: this.goodsInfo.title,
        count: this.count,
        package: this.goodsInfo.setMeal[index1][index2]
      }
      this.addShoppingCart(data)
      this.$router.push('/shoppingCart')
    }
  },
  mounted () {
    loadGoodsInfo().then((result) => {
      this.goodsInfo = result
    })
    loadBookInfo(this.id).then((result) => {
      console.error(result.data.data)
      mergeBookInfo(result.data.data).then((res) => {
        // console.error(res)
        this.bookInfo = res
        this.isBorrowed = res.is_borrowed
        console.error(this.bookInfo)
      })
      // console.error(this.bookInfo)
    }).catch((err) => {
      throw err
    })
  },
  components: {
    Search,
    Header
  }
}
</script>

<style scoped>
.book-status {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.borrow_btn {
  margin-top: 100px;
}
.contrainer {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  margin-top: 30px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
</style>
