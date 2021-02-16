
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

// vue need use router to process router component
Vue.use(Router)


const router = new Router({
  mode: 'history',
    routes: [
      
      {
        // path to go login 
          path:'/login',
          component:()=> import('./pages/login/login.vue'),
      },
      
      {

        // path to go dashboard  
        path: '/',
    component:()=> import('./pages/login/dashboard.vue'),
  
    meta: {
      requiresAuth: true
  },children:[
    {
      // path to go usernamemanagement 
      path:'/usermanagement',
      component:()=> import('./pages/login/usermanagement.vue'),
    },
    {
      // path to go ammonia page
      path:'/graphammonia',
      component:()=> import('./pages/login/graphammonia.vue'),
    },
    {
      // path to go counter people page
      path:'/counterpeople',
      component:()=> import('./pages/login/counterpeople.vue'),
    },
    {
      // path to go detail view data counter people 
      path:'/detailviewcounter/:id',
      name: "detailviewcounter",
      component:()=> import('./pages/login/detailviewcounter.vue'),
      
    },

    {
      //path to go help.. function is to guide admin to understand flow system 
      path:'/help',
      component:()=> import('./pages/login/help.vue'),

    },
    
   

  ]


      },

      { path: "*",
       component:()=> import('./pages/login/page404.vue'),
      }

      // {
      //   path:'/usermanagement',
      //   component:()=> import('./pages/login/usermanagement.vue'),
      // }
    ]
  })
  // Navigation Guards
  //  to prevent un authencation got the next page
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