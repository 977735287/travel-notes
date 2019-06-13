Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [
      {
        title: '桂林阳朔',
        color: 'cyan',
        date: '2019-06-12'
      },
      {
        title: '测试标题长度',
        color: 'green',
        date: '2019-06-12'
      },
      {
        title: '再长一点再长一点再长一...',
        color: 'mauve',
        date: '2019-06-12'
      },
      {
        title: '测试标题长度-测试标题...',
        color: 'orange',
        date: '2019-06-12'
      },
      {
        title: '测试标题长度-测试标题...',
        color: 'green',
        date: '2019-06-12'
      },
      {
        title: 'new',
        color: 'grey',
        date: ''
      }
    ],
  },
  methods: {
    look: function (e) {
      wx.navigateTo({
        url: ''
      })
    },
    add: function (e) {
      wx.navigateTo({
        url: '/pages/basics/new/index'
      })
    }
  }
})