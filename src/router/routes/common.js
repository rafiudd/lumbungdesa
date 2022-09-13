export default [
  {
    path: "/",
    name: "landingPage",
    component: () =>
      import( /* webpackChunkName: "landingPage" */ "@/views/Common/LandingPage.vue"),
  },
  {
    path: "/produk",
    name: "produk",
    component: () =>
      import( /* webpackChunkName: "produk" */ "@/views/Common/Produk.vue"),
  },
  {
    path: "/pelatihan",
    name: "pelatihan",
    component: () =>
      import( /* webpackChunkName: "pelatihan" */ "@/views/Common/Pelatihan.vue"),
  },
  {
    path: "/desa-budaya",
    name: "desa-budaya",
    component: () =>
      import( /* webpackChunkName: "desa-budaya" */ "@/views/Common/DesaBudaya.vue"),
  },
  {
    path: "/donasi",
    name: "donasi",
    component: () =>
      import( /* webpackChunkName: "donasi" */ "@/views/Common/Donasi.vue"),
  },
  {
    path: "/CSR",
    name: "CSR",
    component: () =>
      import( /* webpackChunkName: "CSR" */ "@/views/Common/CSR.vue"),
  },
];