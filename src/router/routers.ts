export const constantRoutes = [
  {
    // 首页
    path: '/',
    component: () => import('@/views/index.vue'),
    name: 'index', // 命名路由
    meta: {
      title: '首页',
      show: false, // 控制是否要显示 false不显示
      icon: 'index' //小图标
    }
  },
  {
    // 登录页面
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      show: false, // 控制是否要显示 false不显示
      icon: 'home' //小图标
    }
  }
]
