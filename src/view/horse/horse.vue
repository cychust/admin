<template>
  <div>
    <div id="mapContainer"
         style="width:98%; height:800px; text-align:center"></div>
  </div>
</template>
<script>

require('echarts/map/js/china.js')
require('echarts/map/js/province/hubei.js')
require('echarts/map/js/province/henan.js')
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
      ],
      /*eslint-disable*/
      mapData: [
        {name: '北京', value: this.randomData()*1000 },
        {name: '天津', value: this.randomData()*1000 },
        {name: '上海', value: this.randomData()*1000 },
        {name: '重庆', value: this.randomData()*1000 },
        {name: '河北', value: this.randomData()*1000 },
        {name: '河南', value: this.randomData()*1000 },
        {name: '云南', value: this.randomData()*1000 },
        {name: '辽宁', value: this.randomData()*1000 },
        {name: '黑龙江', value: this.randomData() },
        {name: '湖南', value: this.randomData()*1000 },
        {name: '安徽', value: this.randomData()*1000 },
        {name: '山东', value: this.randomData()*1000 },
        {name: '新疆', value: this.randomData()*1000 },
        {name: '江苏', value: this.randomData()*1000 },
        {name: '浙江', value: this.randomData()*1000 },
        {name: '江西', value: this.randomData()*1000 },
        {name: '湖北', value: this.randomData()*1000 },
        {name: '广西', value: this.randomData()*1000 },
        {name: '甘肃', value: this.randomData()*1000 },
        {name: '山西', value: this.randomData()*1000 },
        {name: '内蒙古', value: this.randomData() },
        {name: '陕西', value: this.randomData()*1000 },
        {name: '吉林', value: this.randomData()*1000 },
        {name: '福建', value: this.randomData()*1000 },
        {name: '贵州', value: this.randomData()*1000 },
        {name: '广东', value: this.randomData()*1000 },
        {name: '青海', value: this.randomData()*1000 },
        {name: '西藏', value: this.randomData()*1000 },
        {name: '四川', value: this.randomData()*1000 },
        {name: '宁夏', value: this.randomData()*1000 },
        {name: '海南', value: this.randomData()*1000 },
        {name: '台湾', value: this.randomData()*1000 },
        {name: '香港', value: this.randomData()*1000 },
        {name: '澳门', value: this.randomData()*1000 },
        {name: '杭州', value: this.randomData()*1000 }
      ],
      /* eslint-enable */
      dataa: [
        {name: '郑州市', value: 30}
      ]
    }
  },
  methods: {
    randomData () {
      return [Math.round(Math.random() * 1000)]
    },

    drawChinaMap (mapData, mapType, provinceName) {
      var myChart = this.$echarts.init(document.getElementById('mapContainer'))
      // myChart.setOption({})
      var option = {}
      option = {
        title: {
          text: '降水量',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: 1000000,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            saveAsImage: {}
          }
        },
        animation: true,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        series: [
          {
            name: '出版社分布',
            type: mapType,
            mapType: 'china',
            width: '50%',
            right: '50%',
            roam: false,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  // var valueType = params.data.value[1] ? 'valueUp' : 'valueDown'
                  return params.name +
                            '{' + params.value + '}'
                },
                position: 'inside',
                backgroundColor: '#fff',
                padding: [4, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                color: '#777'
              },
              emphasis: {
                show: true
              }
            },
/* eslint-disable */
            data: mapData,
          },
          {
            name: '出版社分布',
            type: mapType,
            mapType: '河南',
            left:'60%',
            // top:'25%',
            width:'30%',
            roam: false,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  // var valueType = params.data.value[1] ? 'valueUp' : 'valueDown'
                  return params.name +
                            '{' + params.value + '}'
                },
                position: 'inside',
                backgroundColor: '#fff',
                padding: [4, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                color: '#777'
              },
              emphasis: {
                show: true
              }
            },
/* eslint-disable */
            data: this.dataa,
          }
        ]
      }
      /* eslint-enable */
      myChart.setOption(option, true)
      myChart.on('click', (params) => {
        console.error(params.data)
        console.error(params.data.value)
        this.$Message.info(params.name)
        option.series[1] = {
          name: '出版社分布',
          type: mapType,
          mapType: params.name,
          left: '60%',
          // top:'25%',
          width: '30%',
          roam: false,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                // var valueType = params.data.value[1] ? 'valueUp' : 'valueDown'
                return params.name +
                            '{' + params.value + '}'
              },
              position: 'inside',
              backgroundColor: '#fff',
              padding: [4, 5],
              borderRadius: 3,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.5)',
              color: '#777'
            },
            emphasis: {
              show: true
            }
          },
          data: this.dataa
        }
        myChart.setOption(option, true)
        console.error(params.name)
        // this.changeMap()
        // this.drawChinaMap(this.myData, 'scatter')
      })
    },
    changeMap () {
      this.drawChinaMap(this.myData, 'scatter')
    }
  },
  mounted () {
    this.drawChinaMap(this.mapData, 'map', '河南')
  }
}
</script>
<style lang="less" scoped>
@import './horse.less';
</style>
