import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Brain",
    component: () => import("../views/Client/Brain/Brain.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Client/Dashboard/Dashboard.vue")
      },
      {
        path: "/Statement",
        name: "Statement",
        component: () => import("../views/Client/Statement/Statement.vue")
      },
      {
        path: "/Beneficiary",
        name: "Beneficiary",
        component: () => import("../views/Client/Beneficiary/Beneficiary.vue")
      },
      {
        path: "/Account",
        name: "Account",
        component: () => import("../views/Client/Account/Account.vue")
      },
      {
        path: "/Transfer",
        name: "Transfer",
        component: () => import("../views/Client/Transfer/Options.vue")
      },
      {
        path: "/TransferOwn",
        name: "TransferOwn",
        component: () => import("../views/Client/Transfer/Own.vue")
      },
      {
        path: "/TransferSame",
        name: "TransferSame",
        component: () => import("../views/Client/Transfer/Same.vue")
      },
      {
        path: "/TransferOther",
        name: "TransferOther",
        component: () => import("../views/Client/Transfer/Other.vue")
      },
      {
        path: "/Fund",
        name: "Fund",
        component: () => import("../views/Client/Transfer/Fund.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
