var option = {
  backgroundColor: '#1b1b1b',
  color: ['gold', 'aqua', 'lime'],
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  dataRange: {
    min: 0,
    max: 2000,
    calculable: true,
    color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [{
      name: '全国',
      type: 'map',
      roam: true,
      hoverable: false,
      mapType: 'china',
      itemStyle: {
        normal: {
          borderColor: 'rgba(100,149,237,1)',
          borderWidth: 0.5,
          areaStyle: {
            color: '#1b1b1b'
          }
        }
      },
      data: [],
      markLine: {
        smooth: true,
        symbol: ['none', 'circle'],
        symbolSize: 1,
        itemStyle: {
          normal: {
            color: '#fff',
            borderWidth: 1,
            borderColor: 'rgba(30,144,255,0.5)'
          }
        },
        data: {
          [{
            name: '总部'
          }, {
            name: '广东'
          }],
        }
      },
      geoCoord: {
        '上海': [121.4648, 31.2891],
        '新疆': [87.9236, 43.5883],
        '甘肃': [103.5901, 36.3043],
        '总部': [70.4551, 50.2539],
        '北京': [116.4551, 40.2539],
        '江苏': [118.8062, 31.9208],
        '广西': [108.479, 23.1152],
        '江西': [116.0046, 28.6633],
        '安徽': [117.29, 32.0581],
        '内蒙古': [111.4124, 40.4901],
        '黑龙江': [127.9688, 45.368],
        '天津': [117.4219, 39.4189],
        '山西': [112.3352, 37.9413],
        '广东': [113.5107, 23.2196],
        '四川': [103.9526, 30.7617],
        '西藏': [91.1865, 30.1465],
        '云南': [102.9199, 25.4663],
        '浙江': [119.5313, 29.8773],
        '湖北': [114.3896, 30.6628],
        '辽宁': [123.1238, 42.1216],
        '山东': [117.1582, 36.8701],
        '海南': [110.3893, 19.8516],
        '河北': [114.4995, 38.1006],
        '福建': [119.4543, 25.9222],
        '青海': [101.4038, 36.8207],
        '陕西': [109.1162, 34.2004],
        '贵州': [106.6992, 26.7682],
        '河南': [113.4668, 34.6234],
        '重庆': [107.7539, 30.1904],
        '宁夏': [106.3586, 38.1775],
        '吉林': [125.8154, 44.2584],
        '湖南': [113.0823, 28.2568]
      }
    },
    {
      name: '总部 Top10',
      type: 'map',
      mapType: 'china',
      data: [],
      markLine: {
        smooth: true,
        effect: {
          show: true,
          scaleSize: 1,
          period: 30,
          color: '#fff',
          shadowBlur: 10
        },
        itemStyle: {
          normal: {
            borderWidth: 1,
            lineStyle: {
              type: 'solid',
              shadowBlur: 10
            }
          }
        },
        data: a
      },
      markPoint: {
        symbol: 'emptyCircle',
        symbolSize: function (v) {
          return 10 + v / 100
        },
        effect: {
          show: true,
          shadowBlur: 0
        },
        itemStyle: {
          normal: {
            label: {
              show: true
            }
          },
          emphasis: {
            label: {
              position: 'top'
            }
          }
        },
        data: e
      }
    }
  ]
}
