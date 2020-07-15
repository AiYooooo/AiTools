import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/Home'),
    },
    {
        name: 'color',
        path: '/color',
        component: () => import('@/pages/Color'),
        meta: {title: '颜色转换工具'}
    },
    {
        name: 'excel',
        path: '/excel',
        component: () => import('@/pages/Excel'),
        meta: {title: 'Excel解析工具'}
    }
]

const router = new VueRouter({
    routes
});

export default router;