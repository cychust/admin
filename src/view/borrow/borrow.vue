<template>
  <div class="borrow">
    <div class="contrainer">
      <Header></Header>
      <Search></Search>
      <!-- 电脑专场 -->
      <div class="content">
        <!-- 内容 -->
        <!-- 电脑专场 -->
        <div class="item-class">
          <div class="item-class-head">
            <span class="item-class-title">{{computer.title}}</span>
          </div>
          <div class="item-class-content"
               v-for="(item, index) in computer.detail"
               :key="index">
            <div class="item-content-top">
              <div class="item-big-img">
                <router-link to="/BookDetail">
                  <img :src="item.bigImg"
                       alt="">
                </router-link>
              </div>
              <div class="item-four-img">
                <div class="item-four-detail"
                     v-for="(subItem, index) in item.itemFour"
                     :key="index">
                  <div class="item-four-detail-text">
                    <p class="pt_bi_tit">{{subItem.title}}</p>
                    <p class="pt_bi_promo">{{subItem.intro}}</p>
                  </div>
                  <div class="item-four-detail-img">
                    <router-link to="/goodsList">
                      <img :src="subItem.img"
                           alt="">
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- 爱吃专场 -->
        <div class="item-class">
          <div class="item-class-head item-class-eat-head">
            <span class="item-class-title">{{eat.title}}</span>

            </ul>
          </div>
          <div class="item-class-content"
               v-for="(item, index) in eat.detail"
               :key="index">
            <div class="item-content-top">
              <div class="item-big-img">
                <img :src="item.bigImg"
                     alt="">
              </div>
              <div class="item-four-img">
                <div class="item-four-detail"
                     v-for="(subItem, index) in item.itemFour"
                     :key="index">
                  <div class="item-four-detail-text">
                    <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                    <p class="pt_bi_promo">{{subItem.intro}}</p>
                  </div>
                  <div class="item-four-detail-img">
                    <router-link to="/goodsList">
                      <img :src="subItem.img"
                           alt="">
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import Footer from './Footer'
// import Footer from './Footer'
import { loadComputerList, loadFavoriteList } from '@/api/data'
export default {
  name: 'borrow',
  data () {
    return {
      sreachItem: '',

      computer: {
        title: '计算机类'
      },
      eat: {}
    }
  },
  computed: {
  },
  methods: {
  },
  created () {

  },
  mounted () {
    loadComputerList().then((result) => {
      this.computer = result
    })
    loadFavoriteList().then((result) => {
      this.eat = result
    })
  },
  components: {
    Search,
    Header,
    // BookList,
    Footer
  }
}
</script>

<style scoped>
.borrow {
  overflow: auto;
  height: 100%;
}
.container {
  background-color: #f6f6f6;
  height: 100hv;
}
.content {
  width: 1008px;
  margin: 0px auto;
}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 330px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {
  width: 100%;
  height: 50px;
  background-color: #e01222;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 22px;
  line-height: 50px;
  color: #fff;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 183px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/

/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 400px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-eat-head {
  background-color: #ecb226;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #eeb955;
  border: 1px solid #eeb955;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 49%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 260px;
}
.item-big-img {
  width: 180px;
  height: 260px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 303px;
  margin-left: 8px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 152px;
  height: 130px;
  margin-left: -1px;
  float: left;
}
.item-four-detail:first-child {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.item-four-detail-text {
  width: 50px;
  margin-left: 5px;
  margin-top: 15px;
  float: left;
}
.item-four-detail-img {
  width: 96px;
  margin-top: 15px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #00695c;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
/*****************************商品专栏结束*****************************/
</style>
