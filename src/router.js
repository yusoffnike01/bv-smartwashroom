
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)


const router = new Router({
  mode: 'history',
    routes: [
      
      {
          path:'/login',
          component:()=> import('./pages/login/login.vue'),
      },
      
      {
          
        path: '/',
    component:()=> import('./pages/login/dashboard.vue'),
  
    meta: {
      requiresAuth: true
  },children:[
    {
      path:'/usermanagement',
      component:()=> import('./pages/login/usermanagement.vue'),
    },
    {
      path:'/graphammonia',
      component:()=> import('./pages/login/graphammonia.vue'),
    },
    {
      path:'/counterpeople',
      component:()=> import('./pages/login/counterpeople.vue'),
    },
    {
      path:'/detailviewcounter',
      component:()=> import('./pages/login/detailviewcounter.vue'),
    }


  ]


      },

      // {
      //   path:'/usermanagement',
      //   component:()=> import('./pages/login/usermanagement.vue'),
      // }
    ]
  })
  
  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters['auth/isLoggedIn']) {
			next()
			return
		}
		next('/login')
    } else {
		next()
    }
})

  export default router