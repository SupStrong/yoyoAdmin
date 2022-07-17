import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ee610c6 = () => interopDefault(import('..\\pages\\mySource\\index.vue' /* webpackChunkName: "pages/mySource/index" */))
const _7744dec6 = () => interopDefault(import('..\\pages\\admin\\console.vue' /* webpackChunkName: "pages/admin/console" */))
const _20a5cb76 = () => interopDefault(import('..\\pages\\tool\\font.vue' /* webpackChunkName: "pages/tool/font" */))
const _01a440c4 = () => interopDefault(import('..\\pages\\tool\\search.vue' /* webpackChunkName: "pages/tool/search" */))
const _2f658432 = () => interopDefault(import('..\\pages\\tool\\secretary.vue' /* webpackChunkName: "pages/tool/secretary" */))
const _31711ede = () => interopDefault(import('..\\pages\\tool\\source.vue' /* webpackChunkName: "pages/tool/source" */))
const _87799360 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _bcc8dc12 = () => interopDefault(import('..\\pages\\user\\setting.vue' /* webpackChunkName: "pages/user/setting" */))
const _4748ed76 = () => interopDefault(import('..\\pages\\web\\home.vue' /* webpackChunkName: "pages/web/home" */))
const _73321ae4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/mySource",
    component: _9ee610c6,
    name: "mySource"
  }, {
    path: "/admin/console",
    component: _7744dec6,
    name: "admin-console"
  }, {
    path: "/tool/font",
    component: _20a5cb76,
    name: "tool-font"
  }, {
    path: "/tool/search",
    component: _01a440c4,
    name: "tool-search"
  }, {
    path: "/tool/secretary",
    component: _2f658432,
    name: "tool-secretary"
  }, {
    path: "/tool/source",
    component: _31711ede,
    name: "tool-source"
  }, {
    path: "/user/login",
    component: _87799360,
    name: "user-login"
  }, {
    path: "/user/setting",
    component: _bcc8dc12,
    name: "user-setting"
  }, {
    path: "/web/home",
    component: _4748ed76,
    name: "web-home"
  }, {
    path: "/",
    component: _73321ae4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
