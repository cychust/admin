export default {
  state: {
    computer: {}
  },
  actions: {
    // 加载电脑专栏数据
    loadComputer ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        const computer = {
          title: '电脑数码',
          link: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊'],
          detail: [{
            bigImg: '../../assets/computer/item-computer-1.jpg',
            itemFour: [{
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: '../../assets/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: '../../assets/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: '../../assets/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: '../../assets/computer/item-computer-1-5.jpg'
            }
            ],
            itemContent: [
              '../../assets/computer/item-computer-1-6.jpg',
              '../../assets/computer/item-computer-1-7.jpg',
              '../../assets/computer/item-computer-1-8.jpg'
            ]
          },
          {
            bigImg: '../../assets/computer/item-computer-2-1.jpg',
            itemFour: [{
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: '../../assets/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: '../../assets/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: '../../assets/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: '../../assets/computer/item-computer-2-5.jpg'
            }
            ],
            itemContent: [
              '../../assets/computer/item-computer-2-6.jpg',
              '../../assets/computer/item-computer-2-7.jpg',
              '../../assets/computer/item-computer-2-8.jpg'
            ]
          }
          ]
        }
        commit('SET_COMPUTER_INFO', computer)
        console.error(computer)
        console.error(state.computer)
        // console.error('loadcom')
      })
    }

  },
  mutations: {
    SET_COMPUTER_INFO (state, computer) {
      state.computer = computer
    }
  }
}
