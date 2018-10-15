<template>
  <div>
    <div class="borrow">
      <Search></Search>
      <!-- 电脑专场 -->
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title}}</span>
          <ul>
            <li v-for="(item, index) in computer.link"
                :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content"
             v-for="(item, index) in computer.detail"
             :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
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
          <div class="item-content-bottom">
            <div class="item-content-bottom-img"
                 v-for="(subImg, index) in item.itemContent"
                 :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from './Search.vue'
import {mapActions, mapState} from 'vuex'
import store from '@/store'
export default{
  name: 'borrow',
  data () {
    return {
      computer: {}
    }
  },
  created () {
    this.loadComputer()
  },
  mounted () {
    console.error('this')
    this.loadComputer()
    this.computer = this.$store.state.borrow.computer
    console.error(this.$store.state.borrow.computer)
    console.error('aaa')
  },
  methods: {
    ...mapActions(['loadComputer'])
  },
  components: {
    Search
  },
  computed: {
    ...mapState(['computer'])
  },
  store
}
</script>
<style>
.borrow {
  width: 1080px;
  margin: 0 auto;
}
/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 470px;
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
</style>
