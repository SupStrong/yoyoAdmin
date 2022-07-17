<template>
  <div class="container" style="height: 800px">
    <div class="screen">
      <div class="landscape"></div>
      <div class="filter"></div>
      <canvas id="canvas"></canvas>
      <div class="s_show">
        <div class="magictime twisterInUp" ref="magictime" v-for="(item,index) in newArr" :key="index" :data-id="item.rand">{{item.name}}</div>
    </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      newArr:[
        {
            rand: '1', // 随机数
            fScale: '1', //缩放比例 0 - 1
            type: 'text', // 类型 text 文字 image 图片
            name: '你好', // 文字
            fColor: '255,255,255', // 颜色
            fSize: 20, // 字号 
            fFamily: 'cursive', // 字体
            fFamilyName: '蜡笔小新体', // 字体原始名称
            fWeight: '400', // 字体粗细 400 - 800
            fStyle: 'inherit', // 倾斜度 inherit 默认 italic倾斜
            fMode: 'inherit', // 排列方式  inherit 默认 tb 上下 
            fAlign: 'center', // left 左展示 center 居中展示 right 右展示
            fOpcity: 100, // 透明度 0 - 100
            fShadow: '', // 文字阴影       
       },
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
      let idx = obj.getAttribute("data-id");
      let arr = this.newArr.filter((item) => item.rand == idx);
      var screenHeight = document.documentElement.clientHeight; //获取屏幕可视高度
      var maxTop = screenHeight - obj.offsetHeight; //高度差范围
      obj.style.top = maxTop * Math.random() + "px";
      var screenWidth = document.documentElement.clientWidth; //获取可视宽度
      var maxLeft = screenWidth - obj.offsetWidth; /* - Math.random() * 800 */ //随机宽度差
      obj.style.left = maxLeft + "px";
      // 设置字体属性
      obj.style.color = this.setRgbTo16(arr[0].fColor.split(','));
      obj.style.fontFamily = arr[0].fFamilyName;
      obj.style.fWeight = arr[0].fWeight;
      obj.style.fontStyle = arr[0].fStyle;
      obj.style.textAlign = arr[0].fAlign;
      obj.style.opacity = arr[0].fOpcity / 100;
      obj.style.textShadow = arr[0].fShadow;  
      this.move(Math.random() * 1 + 1, obj, maxLeft);
    },
    setRgbTo16(arr){
      let color = '#';
        for(var i=0;i<arr.length;i++){
            var t = Number(arr[i]).toString(16)
            if(t == "0"){   //如果为“0”的话，需要补0操作,否则只有5位数
                t =  t + "0"
            }
            color += t;
        }
        return color;
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
      }
    },
    //随机颜色函数
    randomColor() {
      return "#" + Math.random().toString(16).slice(-6); //一行简化版截取后六位
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
