

<template>
  <div class="container_water_fall water_content">
    <waterfall :col="col" :gutterWidth="gutterWidth" :data="data" @loadmore="loadmore">
      <template>
        <div class="cell_item" v-for="(item, index) in data" :key="index">
          <p style="white-space: pre-line;">{{item.title}}</p>
        </div>
      </template>
    </waterfall>
    <!-- <loading :show="loading" /> -->
  </div>
</template>
 
<script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/
// import loading from "./components/load";
import { isMobile } from "../../utils/index";
import  textArr from '../../static/json/text.js'
export default {
  props: {
    title: String,
  },
  components: {
    // loading,
  },
  data() {
    return {
      data: [],
      col: 4,
      gutterWidth:20,
      loading: false,
      originData:textArr
    };
  },

  methods: {
    loadmore() {
      // if (!this.loading) {
      //   this.loading = true;
      //   setTimeout(() => {
      //     this.data = this.data.concat(this.originData, this.originData);
      //     this.loading = false;
      //   }, 1000);
      // }
       setTimeout(() => {
          this.data = this.data.concat(this.originData, this.originData);
        }, 200);
    },
  },
  mounted() {
    this.col = isMobile() ? 2 : 4
    console.log(isMobile(),"isMobile()isMobile()")
    this.data = this.originData;
  },
};
</script>


<style  lang="scss" scoped>
.container_water_fall {
  max-width: 1260px!important;
  margin: 0 auto!important;
}
::v-deep .vue-waterfall{
  padding: 0 10px;
}
::v-deep .vue-waterfall-column{
  padding-right: 10px!important;
  box-sizing: border-box;
}
::v-deep .vue-waterfall-column:last-child{
  padding-right: 0!important;
}
.container_water_fall {
  box-sizing: border-box;
  &.water_content {
    margin: 0 15px;
  }

  .cell_item {
    width: 100%;
    // background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 10px;
    .cell_item_img {
      border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
    }
    .item-body {
      //   border: 1px solid #F0F0F0;
      padding: 12px;
      .item-title {
        font-size: 22px;
        color: #333333;
        font-weight: bold;
      }
      .item-footer {
        position: relative;
        display: flex;
        justify-content: left;
        flex-direction: column;
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .name {
          font-size: 22px;
          color: #fc8800;
        }
        .like {
          right: 0;
          display: flex;
          align-items: center;

          .item_title {
            font-size: 30px;
            color: #f63b66;
          }
          .item_sold {
            font-size: 24px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #999;
          }
        }
      }
    }
  }
}
</style>