Page({
  data: {
    iconSize: [20, 30, 40, 50, 60, 100],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    iconName:'icon-sun',
    percentValue: 0,
    nodes:[{
      name: "div",
      attrs: {
        class: "div_class",
        style: "line-height: 20px;padding:20px;"
      },
      children: [
        {
          type: "text",
          text: "小程序富文本实践"
        }, {
          name: "img",
          attrs: {
            src: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
            style: "width:100%"
            ,style:'width:100%;font-size:0;display:block;'//修改样式
          }
        },{
          name: 'img',
          attrs: {
            src: 'https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg',
            style: 'width:100%'
            ,style:'width:100%;font-size:0;display:block;'//修改样式
            ,class: 'img'
          }
        }, {
          name: 'img',
          attrs: {
            src: 'https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg',
            style: 'width:100%'
            ,style:'width:100%;font-size:0;display:block;'//修改样式
          }
        }
      ]
    }],
    urls: [],
    tagStyle: {
      img: 'font-size:0;display:block;',
    },
    html:"<div>小程序实践,从html中解析文本，拿到图片链接<span>message</span><img src='https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg' /><img src='https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg' /></div>"
  },
  onProgressActiveEnd(e){
    console.log(e)
  },
  onTapProgressBar(e){
    console.log(e)
    let progress = this.data.percentValue
    if (progress < 100){
      progress += 5
      this.setData({percentValue:Math.min(100, progress)})
    }
  },
  // 已经加载完的进度条progress，怎么点击某个按钮让它重新加载呢？
  onTapReloadBtn(e){
    this.setData({percentValue:0})
    this.setData({percentValue:50})
  },
  // 7环形进度条
  drawProgress(){
    if (this.data.percentValue >= 100){
      this.setData({
        percentValue:0
      })
    }
    this.setData({
      percentValue:this.data.percentValue+10
    })
  },
  // 是否准备好 
  onReady() {
    // 取出urls
    function findUrl(nodes) {
      let urls = []
      if(!nodes) {
        return urls
      }
      nodes.forEach(item => {
        if(item.name == 'img' && item.attrs) {
          for(const key in item.attrs) {
            if(key == 'src') {
              urls.push(item.attrs[key])
            }
          }
        }
        if(item.children) {
          urls = urls.concat(findUrl(item.children))
        }
      })
      return urls
    }
    this.data.urls = findUrl(this.nodes)
  },
  // 点击图片
  onTapImage(e) {
    console.log('image url: ', e.detail.src)  
  }
})