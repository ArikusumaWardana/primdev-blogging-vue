import AuthorTemplates from '@/views/templates/authorTemplates.vue';
import UserTemplates from '@/views/templates/userTemplates.vue';
import Home from '@/views/pages/home.vue';
import About from '@/views/pages/about.vue';
import Blogs from '@/views/pages/author/blogs.vue';
import Dashboard from '@/views/pages/author/dashboard.vue';
import CreateBlog from '@/views/pages/author/CreateBlog.vue';
import UpdateBlog from '@/views/pages/author/UpdateBlog.vue';
import { createRouter, createWebHistory } from 'vue-router';
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
