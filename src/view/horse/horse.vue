<template>
  <div id="mapContainer"
       style="width:98%; height:800px; text-align:center"></div>
</template>
<script>
// import option from './map-option.js'

require('echarts/map/js/china.js')
// require('echarts/map/json/china.json')
export default{
  name: '',
  data () {
    return {
      myData: [
        {name: '海门', value: [121.15, 31.89, 90]},
        {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
        {name: '招远', value: [120.38, 37.35, 142]},
        {name: '舟山', value: [122.207216, 29.985295, 123]}
      ]
    }
  },
  methods: {
    drawChinaMap () {
      var myChart = this.$echarts.init(document.getElementById('mapContainer'))
      var option = {
        // title: '出版社概览',
        geo: {
          map: 'china'
        },
        itemStyle: { // 定义样式
          normal: { // 普通状态下的样式
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {// 高亮状态下的样式
            areaColor: '#2a333d'
          }
        },
        backgroundColor: '#404a59', // 图表背景色
        series: [
          {
            name: '销量', // series名称
            type: 'scatter', // series图表类型
            coordinateSystem: 'geo', // series坐标系类型
            data: this.myData
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChinaMap()
  }
}
</script>
<style lang="less" scoped>
@import './horse.less';
</style>
