<template>
  <div>
    <client-only>
      <div class="header_nav">
        <Header />
      </div>
      <!-- <div v-if="!isMobile">
        <JrNav />
      </div> -->
      <div class="default_main">
        <Nuxt />
      </div>
      <Footer />
    </client-only>
  </div>
</template>
<script>
import Header from "@/components/layouts/header.vue";
import Footer from "@/components/layouts/footer.vue";
export default {
  mixins: [],
  computed: {
  },
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style>
html {
  font-family: "方正兰亭细黑", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
