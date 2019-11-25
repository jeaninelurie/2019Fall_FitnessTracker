import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  { path: '/login', name: 'login', component: Login},
  { path: '/signup', name: 'signup', component: Signup},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;