import AuthorTemplates from '@/views/templates/authorTemplates.vue';
import UserTemplates from '@/views/templates/userTemplates.vue';
import Home from '@/views/pages/home.vue';
import About from '@/views/pages/about.vue';
import Blogs from '@/views/pages/author/blogs.vue';
import Dashboard from '@/views/pages/author/dashboard.vue';
import CreateBlog from '@/views/pages/author/CreateBlog.vue';
import UpdateBlog from '@/views/pages/author/UpdateBlog.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AuthTemplates from '@/views/templates/authTemplates.vue';
import Login from '@/views/pages/auth/login.vue';
import Register from '@/views/pages/auth/register.vue';
import Details from '@/views/pages/details.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: UserTemplates,
    children: [
      {
        path: '/',
        name: 'user-home',
        component: Home
      },
      {
        path: 'blog/:slug',
        name: 'blog-detail',
        component: Details,
        props : true
      },
      {
        path: '/about',
        name: 'user-about',
        component: About
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AuthorTemplates,
    meta: {
      isAuth: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard-author',
        component: Dashboard
      },
      {
        path: '/dashboard/blogs',
        name: 'dashboard-blogs',
        component: Blogs
      },
      {
        path: '/dashboard/blogs/create',
        name: 'blogs-create',
        component: CreateBlog
      },
      {
        path: '/dashboard/blogs/update',
        name: 'blogs-update',
        component: UpdateBlog
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthTemplates,
    meta: {
      isAuth: false
    },
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: Login
      },
      {
        path: '/auth/register',
        name: 'register',
        component: Register
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    let user = localStorage.getItem('token')
    // console.log(user);
    if (!user) {
      next('auth/login');
    } 
  }
  next()
});

export default router
