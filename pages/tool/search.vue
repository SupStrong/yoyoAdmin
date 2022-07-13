<template>
  <div class="content">
    <div class="tips G-Mt-15">过滤文案数：<span class="tips-text">9,271,493</span></div>
    <div class="banner">
      <swiper :options="swiperOption" style="width: 100%" ref="mySwiper">
        <swiper-slide v-for="(banner, index) in banners" :key="index">
          <img :src="banner" alt="" />
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <div class="box G-Mt-15">
      <div class="l-box">
        <textarea
          name=""
          placeholder="请输入内容"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div class="G-Mt-10">
          <el-button type="success">检测一下</el-button>
          <el-button type="danger">清空文字</el-button>
        </div>
      </div>
      <div class="r-box">
        <textarea
          name=""
          placeholder=""
          disabled
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div class="G-Mt-10 fl-row-justy text-all">
          <p class="G-Fsize-16">全文：2112字 违禁词：0字 敏感词：0字</p>
          <el-button type="success">复制文字</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          },
        },
      },
      banners: [
        "http://ci.lingke.pro/banner.png",
        "https://img2.baidu.com/it/u=2064684749,2471246240&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=282",
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - 195px);
  .banner {
    margin-top: 20px;
    width: 100%;
    height: 150px;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .box {
    display: flex;
    height: 500px;
    .l-box {
      width: 50%;
      height: 400px;
      textarea {
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        padding: 5px 10px;
        font-family: "cursive";
        font-size: 16px;
        border: 1px solid rgb(225, 225, 225);
      }
    }
    .r-box {
      width: 50%;
      height: 400px;
      textarea {
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        background-color: rgba(255, 78, 96, 0.1);
        padding: 5px 10px;
      }
      .text-all{
        font-family: fantasy;
      }
    }
  }
  .swiper {
    height: 100%;
  }
  ::v-deep .swiper-wrapper {
    display: -webkit-inline-box;
  }
  .swiper-slide {
    height: 100%;
    float: left;
    img {
      width: 100%;
      height: 150px;
      cursor: pointer;
    }
  }
  .tips{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    font-family: cursive;
    .tips-text{
    color: #ff4e60;
    font-size: 36px;
    font-family: fantasy;
    }
  }
}
</style>
