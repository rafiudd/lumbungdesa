import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import { middlewareHandle } from '@/middlewares'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...routes],
});

router.beforeEach((to, from, next) => {
  return middlewareHandle(to, from, next)
})

router.beforeResolve((to, from, next) => {
   next();
})

export default router;
