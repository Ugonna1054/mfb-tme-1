import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //Home route
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue")
  },
  //Change password
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: () =>
      import("../views/Security/ChangePassword/ChangePassword.vue")
  },
  //Send password reset email
  {
    path: "/ResetEmail",
    name: "ResetEmail",
    component: () => import("../views/Security/ForgotPassword/email.vue")
  },
  //Reset password
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () =>
      import("../views/Security/ForgotPassword/ResetPassword.vue")
  },
  //User/Customer Routes
  {
    path: "/dashboard",
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
  //Admin Routes
  {
    path: "/admin/login",
    name: "admin/login",
    component: () => import("../views/Admin/Login/Login.vue")
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/Admin/Brain/Brain.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Admin/Dashboard/Dashboard.vue")
      },
      {
        path: "/Admin/User",
        name: "User",
        component: () => import("../views/Admin/User/User.vue")
      },
      {
        path: "/Admin/Approvals",
        name: "Approvals",
        component: () => import("../views/Admin/Approvals/Approvals.vue")
      },
      {
        path: "/Admin/Approvals/Details",
        name: "Details",
        component: () => import("../views/Admin/Approvals/Details.vue")
      },
      {
        path: "/Admin/Reports/BalanceSheet",
        name: "Reports",
        component: () => import("../views/Admin/Reports/BalanceSheet.vue")
      },
      {
        path: "/Admin/Reports/Statement",
        name: "Reports",
        component: () => import("../views/Admin/Reports/IncomeStatement.vue")
      },
      {
        path: "/Admin/Reports/Ledger",
        name: "Reports",
        component: () => import("../views/Admin/Reports/Ledger.vue")
      },
      {
        path: "/Admin/Reports/TrialBalance",
        name: "Reports",
        component: () => import("../views/Admin/Reports/TrialBalance.vue")
      }
    ]
  },

  //Cso/Supervisor Routes
  {
    path: "/Cso",
    name: "Cso",
    component: () => import("../views/Cso/Brain/Brain.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Cso/Dashboard/Dashboard.vue")
      },
      {
        path: "/Cso/User",
        name: "User",
        component: () => import("../views/Cso/User/User.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
