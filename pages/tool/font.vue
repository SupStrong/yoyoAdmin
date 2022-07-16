<template>
  <div class="container" style="height: 800px">
    <div class="screen">
      <div class="landscape"></div>
      <div class="filter"></div>
      <canvas id="canvas"></canvas>
      <div class="s_show">
        <div class="magictime twisterInUp" ref="magictime" v-for="(item,index) in newArr" :key="index">{{item}}</div>
    </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      newArr:[
        '欢迎使用彩色星空弹幕',
        '欢迎使用彩色星空弹幕1'
      ],
      aShowList:null,
      oSend:null
    };
  },
  mounted() {
    //点击发送弹幕
    if (process.browser) {
      this.aShowList = this.$refs.magictime; //获取元素 H5
      this.oSend = this.$refs.send;
    }

    for (var i = 0; i < this.aShowList.length; i++) {
      // console.log("----")
      this.initAll(this.aShowList[i]); //执行初始化函数
    }
  },
  computed: {},
  methods: {
    initAll(obj) {
      console.log(obj,document.documentElement.clientHeight,"document.documentElement.clientHeight")
      var screenHeight = document.documentElement.clientHeight; //获取屏幕可视高度
      var maxTop = screenHeight - obj.offsetHeight; //高度差范围
      obj.style.top = maxTop * Math.random() + "px";
      var screenWidth = document.documentElement.clientWidth; //获取可视宽度
      var maxLeft = screenWidth - obj.offsetWidth; /* - Math.random() * 800 */ //随机宽度差
      obj.style.left = maxLeft + "px";
      obj.style.color = this.randomColor();
      this.move(Math.random() * 5 + 1, obj, maxLeft);
    },
    //弹幕移动函数
    move(k, obj, maxLeft) {
      let that = this;
      var speed = k; //控制速度的变量
      maxLeft -= speed; //往左移动
      if (maxLeft > -obj.offsetWidth) {
        obj.style.left = maxLeft + "px";
        requestAnimationFrame(function () {
          that.move(k, obj, maxLeft);
        }); //H5新增的动画函数
      } else {
        this.initAll(obj); //重新初始化 营造循环弹幕效果
        /*  oShow.removeChild(obj);//DOM删除子节点 */
      }
    },
    //随机颜色函数
    randomColor() {
      return "#" + Math.random().toString(16).slice(-6); //一行简化版截取后六位
      /*var str = '#';
	for(var i = 0;i < 6;i++){
		str += Math.floor(Math.random() * 16).toString(16);
	}
	return str;*/ //普通逻辑版
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
  user-select: none;
}
.screen {
  overflow: hidden;
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.send {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: rgba(10, 10, 10, 0.6);
  text-align: center;
}
.input {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -20px -350px;
  font-size: 0;
}
.text {
  float: left;
  width: 600px;
  height: 40px;
  border: none;
  border-radius: 8px 0 0 8px;
}
.s_show div {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
}
.btn {
  float: left;
  width: 100px;
  background-color: black;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border-radius: 0 8px 8px 0;
}
html,
body {
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: none;
  background: black;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
}
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}
@keyframes colorChange {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
}
.landscape {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  // background-image:url('img/xkbg.png');
  background-size: 1000px 250px;
  background-repeat: repeat-x;
  background-position: center bottom;
}
</style>
