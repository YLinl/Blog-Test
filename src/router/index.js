import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const children = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/blog')
  },
  {
    path: '/blog/detail',
    name: 'blogDetail',
    component: () => import('@/pages/blog/detail')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/pages/category')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/pages/comment')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('@/pages/tag')
  },
];

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        redirect:"/blog",
        component: () => import('@/pages/home'),
        children: children
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/user/login')
        },
        {
            path: "*",
            redirect:'/blog'
        }
    ]
})

router.beforeEach((to, from, next) => {
    //${//to and from are Route Object,next() must be called to resolve the hook}
    next()
});

export default router