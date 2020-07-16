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
        meta: {title: '一套简洁易用的工具集'}
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