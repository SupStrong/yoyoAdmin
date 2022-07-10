<template>
  <div class="slide">
    <el-menu class="el-menu-vertical-demo">
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-工作台</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="2-1">工作台</el-menu-item></nuxt-link
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-模板库</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="2-1">所有-模板</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="2-2">我的-分享</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="2-3"> 回收站 </el-menu-item>
        </nuxt-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-素材库</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="3-1">我的-图片</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="3-2">我的-视频</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="3-3"> 我的-文档 </el-menu-item>
        </nuxt-link>
        <nuxt-link to="/">
          <el-menu-item index="3-3"> 我的-其他 </el-menu-item>
        </nuxt-link>
        <nuxt-link to="/">
          <el-menu-item index="3-3"> 我的-分享库 </el-menu-item>
        </nuxt-link>
        <nuxt-link to="/">
          <el-menu-item index="2-3"> 我的-回收站 </el-menu-item>
        </nuxt-link>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-字体库</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="4-1">我的-字体库</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="4-2">我的-分享库</el-menu-item></nuxt-link
        >
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-文案库</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="5-1">文案-统计</el-menu-item></nuxt-link
        >
      </el-submenu>
            <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>Yo-统计表</span>
        </template>
        <nuxt-link to="/">
          <el-menu-item index="2-1">统计-数据</el-menu-item></nuxt-link
        >
        <nuxt-link to="/">
          <el-menu-item index="2-2">统计-报表</el-menu-item></nuxt-link
        >
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.slide {
  a {
    color: #333;
  }
}
::v-deep .el-menu {
  border: 0px;
  border-right: 0 !important;
}
.el-menu {
  border: 0px;
  border-right: 0 !important;
}
::v-deep .el-submenu:hover{
  background: var(--primary);
}
::v-deep .el-submenu__title:hover{
  background: var(--primary);
}
::v-deep .el-menu-item:hover{
  
  background: var(--primary);
}
</style>
