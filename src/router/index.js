import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CreatePost from '../views/CreatePost.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/create-post',
    name: 'create_post',
    component: CreatePost,
    meta: {
      isProtected: true
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: "error-404",
    component: () => import('../views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.isProtected)) {
    if(localStorage.getItem('laraforum_token')) {
      next();
    }
    else {
      next({name: 'login'});
    }
  }
  else {
    next()
  }

})

export default router
