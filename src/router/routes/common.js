export default [{
  path: "/",
  name: "landingPage",
  component: () =>
    import( /* webpackChunkName: "landingPage" */ "@/views/Common/LandingPage.vue"),
}, ];