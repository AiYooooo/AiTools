import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: {}
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            title: '一套简洁易用的工具集',
        }
    },
    {
        name: 'color',
        path: '/color',
        component: () => import('@/pages/Color'),
        meta: {
            title: '颜色转换工具',
            type: 'menu',
            des: '用来进行RGB颜色和16进制颜色的转换。'
        }
    },
    {
        name: 'excel',
        path: '/excel',
        component: () => import('@/pages/Excel'),
        meta: {
            title: 'Excel解析工具',
            type: 'menu',
            des: '用来进行Excel文档的解析。'
        }
    },
    {
        name: 'qrcode',
        path: '/qrcode',
        component: () => import('@/pages/Qrcode'),
        meta: {
            title: '二维码生成工具',
            type: 'menu',
            des: '用来将文本信息生成二维码。'
        }
    },
    {
        name: 'crop',
        path: '/crop',
        component: () => import('@/pages/Crop'),
        meta: {
            title: '图片裁剪工具',
            type: 'menu',
            des: '用来将图片进行相应尺寸的裁剪。'
        }
    }
]

const router = new VueRouter({
    routes
});

export default router;