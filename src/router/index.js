import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    // 重定向
    redirect: "/login",
  },
  // 登录页
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/index.vue")
  },
  // home页
  {
    path: "/home",
    name: "home",
    redirect: "/index",
    meta: {
      breadcrumb: "企业首页"
    },
    component: () => import("@/layout/index.vue"),
    // 子路由
    children: [
      // 企业首页
      {
        path: "/index",
        name: "index",
        meta: {
          breadcrumb: "企业首页"
        },
        component: () => import("@/views/Home/index/index.vue"),
      },
      // 申请类别
      {
        path: "/approvalApply",
        name: "approvalApply",
        meta: {
          breadcrumb: "申请类别"
        },
        component: () => import("@/views/Home/approvalApply/index.vue"),
        children: [
          // 办公
          {
            path: "/approvalApply/officeApply",
            name: "officeApply",
            meta: {
              breadcrumb: "办公申请"
            },
            component: () => import("@/views/Home/approvalApply/officeApply/index.vue"),
          },
          // 差旅
          {
            path: "/approvalApply/travelApply",
            name: "travelApply",
            meta: {
              breadcrumb: "差旅申请"
            },
            component: () => import("@/views/Home/approvalApply/travelApply/index.vue"),
          },
          // 请假
          {
            path: "/approvalApply/leaveApply",
            name: "leaveApply",
            meta: {
              breadcrumb: "请假申请"
            },
            component: () => import("@/views/Home/approvalApply/leaveApply/index.vue"),
          },
        ]
      },
      // 申请管理
      {
        path: "/approvalManage",
        name: "approvalManage",
        meta: {
          breadcrumb: "申请管理"
        },
        component: () => import("@/views/Home/approvalManage/index.vue"),
        children: [
          // 办公
          {
            path: "/approvalManage/officeManage",
            name: "officeManage",
            meta: {
              breadcrumb: "办公管理"
            },
            component: () => import("@/views/Home/approvalManage/officeManage/index.vue"),
          },
          // 差旅
          {
            path: "/approvalManage/travelManage",
            name: "travelManage",
            meta: {
              breadcrumb: "差旅管理"
            },
            component: () => import("@/views/Home/approvalManage/travelManage/index.vue"),
          },
          // 请假
          {
            path: "/approvalManage/leaveManage",
            name: "leaveManage",
            meta: {
              breadcrumb: "请假管理"
            },
            component: () => import("@/views/Home/approvalManage/leaveManage/index.vue"),
          },
        ]
      },
      // 审批流程
      {
        path: "/approvalProcess",
        name: "approvalProcess",
        meta: {
          breadcrumb: "审批流程"
        },
        component: () => import("@/views/Home/approvalProcess/index.vue"),
        children: [
          {
            path: "/approvalProcess/firstInstance",
            name: "firstInstance",
            meta: {
              breadcrumb: "一审"
            },
            component: () => import("@/views/Home/approvalProcess/firstInstance/index.vue")
          },
          {
            path: "/approvalProcess/secondInstance",
            name: "secondInstance",
            meta: {
              breadcrumb: "二审"
            },
            component: () => import("@/views/Home/approvalProcess/secondInstance/index.vue")
          },
          {
            path: "/approvalProcess/lastInstance",
            name: "lastInstance",
            meta: {
              breadcrumb: "终审"
            },
            component: () => import("@/views/Home/approvalProcess/lastInstance/index.vue")
          }
        ]
      },
      // 档案管理
      {
        path: "/fileManage",
        name: "fileManage",
        meta: {
          breadcrumb: "档案管理"
        },
        component: () => import("@/views/Home/fileManage/index.vue"),
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
