<style lang="less" scoped>
@import './search.less';
</style>

<template>
  <div>
    <div class="search">
      <!-- 组件不能写到template的根节点上，即每个组件只有一个根节点，这里的div就是这个template的根节点 -->
      <!--  getindex是自定义事件 -->
      <!-- <logo-select  @getindex='getIndex'></logo-select> -->
      <img src="../../assets/images/Logo_l.jpg"
           class="logo">
      <div class="search-input">
        <!-- $event是实参，表示event对象 -->
        <!--
                输入搜索内容即时搜索，所以有一个keyup事件。
                按回车键有一个进入搜索内容页面，所以有一个keydown.enter事件
                按上下键可以选择列表条目
            -->
        <input type="text"
               v-model="keyword"
               @keyup="get($event)"
               @keydown.enter="search()"
               @keydown.down="selectDown()"
               @keydown.up.prevent="selectUp()">
        <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
        <span class="search-reset"
              @click="clearInput()">&times;</span>
        <button class="search-btn"
                @click="search()">搜一下</button>
        <div class="search-select">
          <!-- transition-group也是vue2.0中的新特性,tag='ul'表示用ul包裹v-for出来的li -->
          <transition-group name="itemfade"
                            tag="ul"
                            mode="out-in"
                            v-cloak>
            <li v-for="(value,index) in myData"
                :class="{selectback:index==now}"
                class="search-select-option search-select-list"
                @mouseover="selectHover(index)"
                @click="selectClick(index)"
                :key="value">
              {{value}}
            </li>
          </transition-group>
        </div>
      </div>
      <div class="tags">
        <div>
          <Tag type="dot"
               color="primary"
               @click.native="getTags(0)">{{tags1[0]}}</Tag>
          <Tag type="dot"
               color="success"
               @click.native="getTags(1)">{{tags1[1]}}</Tag>
          <Tag type="dot"
               color="warning"
               @click.native="getTags(0)">{{tags1[2]}}</Tag>
          <Tag type="dot"
               color="error"
               @click.native="getTags(1)">{{tags1[3]}}</Tag>
        </div>
        <div>
          <Tag color="default"
               @click.native="getTags2(0)">{{tags2[0]}}</Tag>
          <Tag color="primary">{{tags2[0]}}</Tag>
          <Tag color="success">{{tags2[0]}}</Tag>
          <Tag color="error">{{tags2[0]}}</Tag>
          <Tag color="warning">{{tags2[0]}}</Tag>
          <Tag color="magenta">{{tags2[0]}}</Tag>
          <Tag color="red">{{tags2[0]}}</Tag>
          <Tag color="volcano">{{tags2[0]}}</Tag>
          <Tag color="orange">{{tags2[0]}}</Tag>
          <Tag color="gold">{{tags2[0]}}</Tag>
          <br>
          <Tag color="yellow">{{tags2[0]}}</Tag>
          <Tag color="lime">{{tags2[0]}}</Tag>
          <Tag color="green">{{tags2[0]}}</Tag>
          <Tag color="cyan">{{tags2[0]}}</Tag>
          <Tag color="blue">{{tags2[0]}}</Tag>
          <Tag color="geekblue">{{tags2[0]}}</Tag>
          <Tag color="purple">{{tags2[0]}}</Tag>
          <Tag color="#FFA2D3">{{tags2[0]}}</Tag>
        </div>
      </div>
    </div>
    <div>
      <Card>
        <p>书籍查询结果:</p>
        <tables ref="tables"
                search-place="top"
                v-model="bookTableData"
                :columns="bookColums"
                boder
                no-data-text="你还没有借书记录，快点去借书吧"
                stripe />
      </Card>
      <Divider></Divider>
      <Card>
        <p>订单查询结果:</p>
        <tables ref="orderTables"
                search-place="top"
                v-model="orderTableData"
                :columns="orderColums"
                no-data-text="你还没有借书记录，快点去借书吧"
                boder />
      </Card>
      <Divider></Divider>
      <Card>
        <p>用户查询结果</p>
        <tables ref="userTables"
                v-model="userTableData"
                :columns="userColumns"
                no-data-text="你还没有借书记录，快点去借书吧"
                boder />
      </Card>

    </div>
  </div>
</template>
<script>
import Tables from '_c/tables'
import {getSearchData, getSearchResult} from '@/api/data'
export default {
  components: {
    Tables
  },
  data: function () {
    return {
      tags1: [
        '标签1',
        '标签2',
        '标签3',
        '标签4'
      ],
      tags2: [
        '标签1',
        '标签1',
        '标签1',
        '标签1',
        '标签1',
        '标签1'
      ],
      colors: 'primary',
      myData: [], // 用来接收ajax得到的数据
      keyword: '', // v-model绑定的输入框的value
      now: -1,
      searchIndex: 0,
      logoData: [{
        name: '360搜索',
        searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
      }, {
        name: '百度搜索',
        searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
      }, {
        name: '搜狗搜索',
        searchSrc: 'https://www.sogou.com/web?query='
      }],
      bookTableData: [],
      orderTableData: [],
      userTableData: [],
      userColumns: [
        {title: 'ID', key: 'id', sortable: true},
        {title: '角色名称', key: 'username', sortable: true, editable: true},
        {title: '权限', key: 'roles', editable: true},
        {title: '创建时间', key: 'createTime', editable: true}
      ],
      bookColums: [
        {title: '书籍编号', key: 'id', sortable: true, require: true, editable: true},
        {title: '书籍名称', key: 'book_name', sortable: true, editable: true, require: true},
        {title: '书籍类别', key: 'book_category', editable: true, sortable: true},
        {title: '作者姓名', key: 'author_name', editable: true, sortable: true},
        {title: '出版社', key: 'publish_horse', sortable: true, editable: true},
        {title: '出版日期', key: 'publish_date', sortable: true, editable: true},
        {title: '书籍页数', key: 'page_number', sortable: true, editable: true},
        {title: '是否被借', key: 'borrowed', sortable: true, editable: true},
        {title: '备注信息', key: 'remarks', sortable: false, editable: true}
      ],
      orderColums: [
        {title: '订单ID', key: 'orderId', sortable: true},
        {title: '书籍ID', key: 'isbn', sortable: true, editable: false},
        {title: '书籍名', key: 'bookName', editable: false, sortable: true},
        {title: '创建时间', key: 'createTime', editable: false, sortable: true},
        {title: '借书人', key: 'orderUsername', sortable: true},
        {title: '订单完成时间', key: 'finishedTime', sortable: true},
        {title: '订单是否完成', key: 'isFinished', sortable: true}
      ]
    }
  },
  methods: {
    // &event是实参，表示event对象
    get: function (ev) {
      // 如果按得键是上或者下，就不进行ajax
      if (ev.keyCode === 38 || ev.keyCode === 40) {
        return
      }
      console.error('get')
      // this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function (res) {
      //   this.myData = res.data.s
      // })
      getSearchData(this.keyword).then(result => {
        this.myData = result.data.data
      })
      console.error('end')
    },
    selectDown: function () {
      this.now++
      // 到达最后一个时，再按下就回到第一个
      if (this.now === this.myData.length) {
        this.now = 0
      }
      this.keyword = this.myData[this.now]
    },
    selectUp: function () {
      this.now--
      // 同上
      if (this.now === -1) {
        this.now = this.myData.length - 1
      }
      this.keyword = this.myData[this.now]
    },
    search: function () {
      // 打开对应的搜索界面
      // window.open(this.logoData[this.searchIndex].searchSrc + this.keyword)
      getSearchResult(this.keyword).then((result) => {
        console.error(result.data.data)
        this.bookTableData = result.data.data.bookList
        this.userTableData = result.data.data.userList
        this.orderTableData = result.data.data.orderList
      })
    },
    selectHover: function (index) {
      this.now = index
    },
    selectClick: function (index) {
      this.keyword = this.myData[index]
      this.search()
    },
    clearInput: function () {
      this.keyword = ''
      // this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function (res) {
      //   this.myData = res.data.s
      // })
      this.myData = ''
    },
    getIndex: function (index) {
      this.searchIndex = index
    },
    getTags (index) {
      // console.error('cccccc')
      this.keyword = this.tags1[index]
      this.$Message.error(this.tags1[index])
    },
    getTags2 (index) {
      this.keyword = this.tags1[index]
      this.$Message.error(this.tags1[index])
    }
  }
}
</script>
