<template>
  <div>
    <!-- 轮播图和九宫格实现 -->
    <mt-swipe :auto="4000">
      <!-- 有坑，如果没有keys代码审查不会过 -->
      <mt-swipe-item v-for="(img, index) in imgs" :key="index">
        <img :src="img.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <a :href="grid.href">
            <span :class="grid.className"></span>
            <p>{{grid.title}}</p>
          </a>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '我是主页',
      // 轮播图数据
      imgs: [],
      grids: [
        { href: 'www.baidu.com', className: 'news', title: '新闻资讯' },
        { href: 'www.baidu.com', className: 'share', title: '点击分享' },
        { href: 'www.baidu.com', className: 'show', title: '商品展示' },
        { href: 'www.baidu.com', className: 'feedBack', title: '留言反馈' },
        { href: 'www.baidu.com', className: 'find', title: '搜索' },
        { href: 'www.baidu.com', className: 'contactUs', title: '联系我们' }
      ]
    }
  },
  // created创建组件的生命周期函数中，可以操作数据
  created () {
    this.$axios.get('getlunbo')
      .then(res => {
        // res.data.message = [{img:'图片地址'}]
        this.imgs = res.data.message
      })
      .catch(err => {
        console.log('轮播图获取异常!!', err)
      })
  }
}
</script>
<!-- scoped表示样式只对当前文件生效，如果不设置，这个下面的样式会变成呢个全局样式 -->
<style scoped>
  .mint-swipe{
    height: 200px;
  }
  img{
    width: 100%;
  }
  a{
    color: #3c3c3c;
    text-decoration: none;
  }
  a:hover{
    text-decoration-color: cyan;
  }
  span{
    display: block;
    height: 50px;
    width: 50px;
    margin: 10px auto;
  }
  .news{
    background-size: cover;
    background-image: url("../../assets/icon/新闻.png");
  }
  .share{
    background-size: cover;
    background-image: url("../../assets/icon/分享.png");
  }
  .show{
    background-size: cover;
    background-image: url("../../assets/icon/商品.png");
  }
  .feedBack{
    background-size: cover;
    background-image: url("../../assets/icon/反馈信息.png");
  }
  .find{
    background-size: cover;
    background-image: url("../../assets/icon/搜索.png");
  }
  .contactUs{
    background-size: cover;
    background-image: url("../../assets/icon/联系我们.png");
  }
  .grid p{
    margin: 0;
  }
</style>
