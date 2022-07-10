const url = 'http://127.0.0.1:3000'

const CompressionPlugin = require("compression-webpack-plugin");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/style/bootstrap.min.css',
    '@/assets/style/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    "@/plugins/cookies",
    {
      src: "@/plugins/axios",
      ssr: false,
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all", // initial、async和all
        minSize: 30000, // 形成一个新代码块最小的体积
        maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
        maxInitialRequests: 3, // 最大初始化请求数
        automaticNameDelimiter: "~", // 打包分割符
        name: true,
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/, // 打包第三方库
            chunks: "all",
            priority: 10, // 优先级
          },
          common: {
            // 打包其余的的公共代码
            minChunks: 2, // 引入两次及以上被打包
            name: "common", // 分离包的名字
            chunks: "all",
            priority: 5,
          },
        },
      },
    },
    productionSourceMap: false,
  },
  proxy: {
    "/api":{
      target:url,
      pathRewrite:{"^/api":''}
    }
  },
  axios: {
    proxy: true,
  },
}
