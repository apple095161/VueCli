import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    /*  {
       path: '*', //如果使用者在網址上輸入其他文字的話 會導向到login頁面
       redirect: '/login'
     }, */
    {
      path: '/show',
      name: 'show',
      component: () => import('./views/Showproduct.vue'),
      children: [
        {
          path: '/show',
          name: 'cart',
          component: () => import('./views/cart.vue'),

        }]
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: () => import('./views/Detail.vue'),
      children: [{
        path: '/Detail',
        name: 'cart',
        component: () => import('./views/cart.vue'),

      }]
    },

    {
      path: '/singleproductdetail/:productid', //到達這產品的ID位址 要使用:後面對應ID
      name: 'singleproductdetail',
      component: () => import('./components/singleproductdetail.vue'),
      children: [{
        path: '/singleproductdetail/:productid',
        name: 'cart',
        component: () => import('./views/cart.vue'),
      }]
    },
    {
      path: '/Hot',
      name: 'Hot',
      component: () => import('./components/Hot.vue'),

    },
    ,
    {
      path: '/coupon', //如果使用者在網址上輸入其他文字的話 會導向到login頁面
      name: 'coupon',
      component: () => import('./views/coupon.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),//meta: { requiresAuth: true }, //是否開啟此元件頁面的驗證
      children: [{
        path: 'products',
        name: 'products',
        component: () => import('./components/Products.vue'),
        meta: { requiresAuth: true },
      }]
    },

    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),//meta: { requiresAuth: true }, //是否開啟此元件頁面的驗證
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('./components/CustomerOrder'),
        },
        {
          path: 'customer_checkout/:orderId', //到達這產品的ID位址 要使用:後面對應ID
          name: 'CustomerCheckout',
          component: () => import('./components/customerCheckout'),
        }
      ]
    },
  ]
})
