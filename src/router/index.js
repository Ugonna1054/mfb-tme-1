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
      },
      {
        path: "/Utility",
        name: "Utility",
        component: () => import("../views/Client/Utility/Options.vue")
      },
      {
        path: "/Utility-Mobile",
        name: "Utility-Mobile",
        component: () => import("../views/Client/Utility/Mobile.vue")
      },
      {
        path: "/Utility-Ecommerce",
        name: "Utility-Ecommerce",
        component: () => import("../views/Client/Utility/Ecommerce.vue")
      },
      {
        path: "/Utility-Cable",
        name: "Utility-Cable",
        component: () => import("../views/Client/Utility/Cable.vue")
      },
      {
        path: "/Utility-Internet",
        name: "Utility-Internet",
        component: () => import("../views/Client/Utility/Internet.vue")
      },
      {
        path: "/Loan-Precheck",
        name: "Loan-Precheck",
        component: () => import("../views/Client/Loan/Precheck.vue")
      },
      {
        path: "/Loan-Apply",
        name: "Loan-Apply",
        component: () => import("../views/Client/Loan/Apply.vue")
      },
      {
        path: "/Loan",
        name: "Loan",
        component: () => import("../views/Client/Loan/Loan.vue")
      },
      {
        path: "/Investment-Precheck",
        name: "Investment-Precheck",
        component: () => import("../views/Client/Investment/Precheck.vue")
      },
      {
        path: "/Investment-Apply",
        name: "Investment-Apply",
        component: () => import("../views/Client/Investment/Apply.vue")
      },
      {
        path: "/Investment",
        name: "Investment",
        component: () => import("../views/Client/Investment/Investment.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
