import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const getSearchData = (keyword) => {
  // console.error('in1')
  return axios.request({
    url: 'https://sug.so.360.cn/suggest?word=' + keyword + '&encodein=utf-8&encodeout=utf-8'
    // method: 'get'
    // withCredentials: false
  })
}

/// get all messages

export const getAllMessages = () => {
  return axios.request({
    url: 'http://localhost:9966/api/allMessages',
    method: 'get'
  })
}

// user api

export const registerUser = (tableData) => {
  return axios.request({
    url: 'http://localhost:9966/api/register?username=' + tableData.userName + '&password=' + tableData.password + '&email=' + tableData.email,
    method: 'post'
  })
}

export const getAdminListData = () => {
  return axios.request({
    url: 'http://localhost:9966/api/userList',
    method: 'get'
  })
}

// order api
export const updateOrder = (orderId, finishedTime) => {
  return axios.request({
    url: 'http://localhost:9966/api/updateOrder?order_id=' + orderId + '&finished_time=' + finishedTime,
    method: 'put'
  })
}

export const orderLists = () => {
  return axios.request({
    url: 'http://localhost:9966/api/orderList',
    method: 'get'
  })
}

export const addOrder = (isbn, bookName, orderUsername, createTime) => {
  return axios.request({
    url: 'http://localhost:9966/api/addOrder?isbn=' + isbn + '&book_name=' + bookName + '&order_username=' + orderUsername + '&create_time=' + createTime,
    method: 'post'
  })
}

// book api

export const bookList = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList',
    method: 'get'
  })
}

export const bookHorseList = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookHorseList',
    method: 'get'
  })
}

export const updateBook = (bookName, id) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/updateBook?bookName=' + bookName + '&id=' + id,
    method: 'put'
  })
}

export const insertBook = (tableData) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/insertBook?isbn=' + tableData.id + '&bookName=' +
      tableData.bookName + '&bookCategory=' + tableData.bookCategory + '&authorName=' + tableData.authorName +
      '&publishHorse=' + tableData.publishHorse + '&publishDate=' +
      tableData.publishDate + '&pageNumber=' + tableData.pageNumber + '&remarks=' + tableData.remarks + ' ',
    method: 'put'
  })
}

export const saveTableBookData = (bookData) => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList/insertBook',
    bookData,
    method: 'post'
  })
}

export const getTableBookData = () => {
  return axios.request({
    url: 'http://localhost:9966/api/bookList',
    method: 'get'
  })
}

/** bookList api********************************************************************/

// 加载电脑专栏数据
export const loadComputerList = () => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊'],
      detail: [{
        bigImg: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1.jpg',
        itemFour: [{
          title: '电脑馆',
          intro: '笔记本999元限量秒！',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2.jpg'
        },
        {
          title: '外设装备',
          intro: '1000减618',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-3.jpg'
        },
        {
          title: '电脑配件',
          intro: '联合满减最高省618',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-4.jpg'
        },
        {
          title: '办公生活',
          intro: '5折神券 精品文具',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-5.jpg'
        }
        ],
        itemContent: [
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-6.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-7.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-1-8.jpg'
        ]
      },
      {
        bigImg: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-1.jpg',
        itemFour: [{
          title: '平板电脑',
          intro: '爆款平板12期免息',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-2.jpg'
        },
        {
          title: '智能酷玩',
          intro: '抢999减666神券',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-3.jpg'
        },
        {
          title: '娱乐影音',
          intro: '大牌耳机低至5折',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-4.jpg'
        },
        {
          title: '摄影摄像',
          intro: '大牌相机5折抢',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-5.jpg'
        }
        ],
        itemContent: [
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-6.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-7.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/computer/item-computer-2-8.jpg'
        ]
      }
      ]
    }
    resolve(computer)
  })
}

// 加载爱吃专栏数据
export const loadFavoriteList = () => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: ['休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃'],
      detail: [{
        bigImg: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-1.jpg',
        itemFour: [{
          title: '粮油调味',
          intro: '买2免1',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-2.jpg'
        },
        {
          title: '饮料冲调',
          intro: '第二件半价',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-3.jpg'
        },
        {
          title: '休闲零食',
          intro: '满99减40',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-4.jpg'
        },
        {
          title: '中外名酒',
          intro: '满199减100',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-5.jpg'
        }
        ],
        itemContent: [
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-6.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-7.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-1-8.jpg'
        ]
      },
      {
        bigImg: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-1.jpg',
        itemFour: [{
          title: '东家菜',
          intro: '丰富好味',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-2.jpg'
        },
        {
          title: '东家菜',
          intro: '丰富好味',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-2.jpg'
        },
        {
          title: '东家菜',
          intro: '丰富好味',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-2.jpg'
        },
        {
          title: '东家菜',
          intro: '丰富好味',
          img: 'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-2.jpg'
        }
        ],
        itemContent: [
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-6.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-7.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/index/eat/item-eat-2-8.jpg'
        ]
      }
      ]
    }
    resolve(eat)
  })
}
// 请求获得商品详细信息
export const loadGoodsInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-1.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-2.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-3.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
        tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [{
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/1.jpg',
            intro: '4.7英寸-深邃蓝',
            price: 28.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/2.jpg',
            intro: '4.7英寸-星空黑',
            price: 29.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/3.jpg',
            intro: '5.5英寸-香槟金',
            price: 28.5
          }
          ],
          [{
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/4.jpg',
            intro: '5.5英寸-玫瑰金',
            price: 32.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/5.jpg',
            intro: '5.5英寸-深邃蓝',
            price: 32.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/6.jpg',
            intro: '5.5英寸-星空黑',
            price: 35.0
          }
          ],
          [{
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/7.jpg',
            intro: '4.7英寸-香槟金',
            price: 26.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/8.jpg',
            intro: '4.7英寸-玫瑰金',
            price: 25.0
          },
          {
            img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/9.jpg',
            intro: '4.7英寸-中国红',
            price: 28.0
          }
          ]
        ],
        hot: [{
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/1.jpg',
          price: 28.0,
          sale: 165076
        },
        {
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/2.jpg',
          price: 36.0,
          sale: 135078
        },
        {
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/3.jpg',
          price: 38.0,
          sale: 105073
        },
        {
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/4.jpg',
          price: 39.0,
          sale: 95079
        },
        {
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/5.jpg',
          price: 25.0,
          sale: 5077
        },
        {
          img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/6.jpg',
          price: 20.0,
          sale: 3077
        }
        ],
        goodsDetail: [
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/1.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/2.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/3.jpg',
          'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/4.jpg'
        ],
        param: [{
          title: '商品名称',
          content: 'iPhone 7手机壳'
        },
        {
          title: '商品编号',
          content: '10435663237'
        },
        {
          title: '店铺',
          content: 'Gavin Shop'
        },
        {
          title: '商品毛重',
          content: '100.00g'
        },
        {
          title: '商品产地',
          content: '中国大陆'
        },
        {
          title: '机型',
          content: 'iPhone 7'
        },
        {
          title: '材质',
          content: 'PC/塑料'
        },
        {
          title: '款式',
          content: '软壳'
        },
        {
          title: '适用人群',
          content: '通用'
        }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: ['颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖'],
          remarksNumDetail: [2000, 3000, 900, 1],
          detail: [{
            username: 'p****1',
            values: 3,
            content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
            goods: '4.7英寸-深邃蓝',
            create_at: '2018-05-15 09:20'
          },
          {
            username: '13****1',
            values: 5,
            content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
            goods: '5.5英寸-玫瑰金',
            create_at: '2018-05-13 15:23'
          },
          {
            username: '3****z',
            values: 4.5,
            content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
            goods: '4.7英寸-玫瑰金',
            create_at: '2018-05-05 12:25'
          },
          {
            username: 'gd****c',
            values: 3.5,
            content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
            goods: '4.7英寸-中国红',
            create_at: '2018-04-06 16:23'
          },
          {
            username: 'r****b',
            values: 4.5,
            content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
            goods: '4.7英寸-中国红',
            create_at: '2018-03-15 19:24'
          },
          {
            username: 'd****e',
            values: 5,
            content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
            goods: '5.5英寸-星空黑',
            create_at: '2018-03-10 10:13'
          }
          ]
        }
      }
      resolve(data)
    }, 300)
  })
}
export const loadBookInfo = (id) => {
  return axios.request({
    url: 'http://localhost:9966/api/book?id=' + id,
    method: 'get'
  })
}

export const mergeBookInfo = (data) => {
  return new Promise((resolve, reject) => {
    const ret = {
      id: data.id,
      bookName: data.book_name,
      bookCategory: data.book_category,
      authorName: data.author_name,
      publishHorse: data.publish_horse,
      publishDate: data.publish_date,
      pageNumber: data.page_number,
      is_borrowed: data.borrowed,
      remarks: data.remarks
    }
    resolve(ret)
  })
}
export const borrowBookApi = (bookInfo) => {
  const data = {
    isbn: bookInfo.id,
    book_name: bookInfo.bookName,
    order_username: 'cyc',
    create_time: '2018-10-11'
  }
  return axios.request({
    url: 'http://localhost:9966/api/addOrder',
    params: data,
    method: 'post'
  })
}
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = {
//       goodsImg: [
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-1.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-2.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-3.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/item-detail-4.jpg'
//       ],
//       title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
//       tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
//       discount: ['满148减10', '满218减20', '满288减30'],
//       promotion: ['跨店满减', '多买优惠'],
//       remarksNum: 6000,
//       setMeal: [
//         [{
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/1.jpg',
//             intro: '4.7英寸-深邃蓝',
//             price: 28.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/2.jpg',
//             intro: '4.7英寸-星空黑',
//             price: 29.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/3.jpg',
//             intro: '5.5英寸-香槟金',
//             price: 28.5
//           }
//         ],
//         [{
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/4.jpg',
//             intro: '5.5英寸-玫瑰金',
//             price: 32.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/5.jpg',
//             intro: '5.5英寸-深邃蓝',
//             price: 32.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/6.jpg',
//             intro: '5.5英寸-星空黑',
//             price: 35.0
//           }
//         ],
//         [{
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/7.jpg',
//             intro: '4.7英寸-香槟金',
//             price: 26.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/8.jpg',
//             intro: '4.7英寸-玫瑰金',
//             price: 25.0
//           },
//           {
//             img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/pack/9.jpg',
//             intro: '4.7英寸-中国红',
//             price: 28.0
//           }
//         ]
//       ],
//       hot: [{
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/1.jpg',
//           price: 28.0,
//           sale: 165076
//         },
//         {
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/2.jpg',
//           price: 36.0,
//           sale: 135078
//         },
//         {
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/3.jpg',
//           price: 38.0,
//           sale: 105073
//         },
//         {
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/4.jpg',
//           price: 39.0,
//           sale: 95079
//         },
//         {
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/5.jpg',
//           price: 25.0,
//           sale: 5077
//         },
//         {
//           img: 'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/hot/6.jpg',
//           price: 20.0,
//           sale: 3077
//         }
//       ],
//       goodsDetail: [
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/1.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/2.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/3.jpg',
//         'https://github.com/cychust/admin/raw/master/static/img/goodsDetail/intro/4.jpg'
//       ],
//       param: [{
//           title: '商品名称',
//           content: 'iPhone 7手机壳'
//         },
//         {
//           title: '商品编号',
//           content: '10435663237'
//         },
//         {
//           title: '店铺',
//           content: 'Gavin Shop'
//         },
//         {
//           title: '商品毛重',
//           content: '100.00g'
//         },
//         {
//           title: '商品产地',
//           content: '中国大陆'
//         },
//         {
//           title: '机型',
//           content: 'iPhone 7'
//         },
//         {
//           title: '材质',
//           content: 'PC/塑料'
//         },
//         {
//           title: '款式',
//           content: '软壳'
//         },
//         {
//           title: '适用人群',
//           content: '通用'
//         }
//       ],
//       remarks: {
//         goodAnalyse: 90,
//         remarksTags: ['颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖'],
//         remarksNumDetail: [2000, 3000, 900, 1],
//         detail: [{
//             username: 'p****1',
//             values: 3,
//             content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
//             goods: '4.7英寸-深邃蓝',
//             create_at: '2018-05-15 09:20'
//           },
//           {
//             username: '13****1',
//             values: 5,
//             content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
//             goods: '5.5英寸-玫瑰金',
//             create_at: '2018-05-13 15:23'
//           },
//           {
//             username: '3****z',
//             values: 4.5,
//             content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
//             goods: '4.7英寸-玫瑰金',
//             create_at: '2018-05-05 12:25'
//           },
//           {
//             username: 'gd****c',
//             values: 3.5,
//             content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
//             goods: '4.7英寸-中国红',
//             create_at: '2018-04-06 16:23'
//           },
//           {
//             username: 'r****b',
//             values: 4.5,
//             content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
//             goods: '4.7英寸-中国红',
//             create_at: '2018-03-15 19:24'
//           },
//           {
//             username: 'd****e',
//             values: 5,
//             content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
//             goods: '5.5英寸-星空黑',
//             create_at: '2018-03-10 10:13'
//           }
//         ]
//       }
//     }
//     resolve(data)
//   }, 300)
// })
