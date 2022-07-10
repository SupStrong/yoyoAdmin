<template>
  <div class="container">
    <!-- preloader -->
    <!-- <div id="preloader">
      <img src="assets/images/icon/preloader.gif" alt="preloader" />
    </div> -->
    <!-- preloader -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../../assets/image/logo.png" alt="PortKit"
        /></a>
        <button
          class="navbar-toggler"
          id="js-nav-trigger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle"
        >
          <span></span>
        </button>
        <!-- .navbar-collapse -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                >首页</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >工具</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/tool/search">Yo查词</a>
                </li>
                <li><a class="dropdown-item" href="/tool/font">Yo字体</a></li>
                <li><a class="dropdown-item" href="/tool/source">Yo素材</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >入驻</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="project-details.html"
                    >商家入驻</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="comment.html">博主入驻</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">后台管理</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="contact-me.html">联系我们</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
.container{
  height: 90px;
}
</style>
