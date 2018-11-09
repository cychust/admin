<template>
  <div>
    <Row :gutter="20">
      <i-col span="4"
             v-for="(infor, i) in inforCardData"
             :key="`infor-${i}`"
             style="height: 120px;">
        <infor-card shadow
                    :color="infor.color"
                    :icon="infor.icon"
                    :icon-size="36">
          <count-to :end="infor.count"
                    count-class="count-style" />
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20"
         style="margin-top: 20px;">
      <i-col span="8">
        <Card shadow>
          <chart-pie style="height: 300px;"
                     :value="pieData"
                     text="图书馆书籍类型比例"></chart-pie>
        </Card>
      </i-col>
      <i-col span="16">
        <Card shadow>
          <chart-bar style="height: 300px;"
                     :value="barData"
                     text="每周用户活跃量" />
        </Card>
      </i-col>
    </Row>
    <Row style="margin-top: 20px;">
      <Card shadow>
        <example style="height: 310px;" />
      </Card>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import {getAllMessages} from '@/api/data'
import Example from '../single-page/home/example.vue'
export default {
  name: 'messages',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '总注册用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '总藏书', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: '总订单', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '管理员数目', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '图书分类', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '出版社数量', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        {value: 335, name: '计算机类'},
        {value: 310, name: '科学类'},
        {value: 234, name: '自然学科类'},
        {value: 135, name: '人文学科类'},
        {value: 1548, name: '数学类'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted () {
    //
    getAllMessages().then(result => {
      console.error(result.data.data)
      var data = result.data.data
      this.inforCardData[0].count = data.userCount
      this.inforCardData[1].count = data.bookCount
      this.inforCardData[2].count = data.orderCount
      this.inforCardData[3].count = data.adminerCount
      this.inforCardData[4].count = data.bookCategoryCount
      this.inforCardData[5].count = data.publishHorseCount
    }).catch(err => {
      throw err
    })
  },
  methods: {

  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
