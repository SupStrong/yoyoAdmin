<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <slider />
      </el-aside>
      <el-main style="min-height: 800px; background: #f5f6fa">
        <nuxt-child></nuxt-child>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import slider from "@/components/layouts/slider";
export default {
  data() {
    return {
      windowWidth: null,
    };
  },
  components: {
    slider,
  },
  middleware: "",
  computed: {},
  mounted() {},
  methods: {
    // ...mapMutations([]),
  },
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 1200px) {
  .el-aside {
    width: 0 !important;
  }
  .el-main {
    padding: 0.213333rem !important;
  }
}
::v-deep .el-menu {
  background-color: #0e1630;
  span {
    color: white;
  }
  .el-menu-item {
    color: white;
  }
}
::v-deep .el-main{
  background-color: #0e1630!important;
}
</style>
