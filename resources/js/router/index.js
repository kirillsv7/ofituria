import {createRouter, createWebHistory} from "vue-router";

import ProductIndex from "../components/Product/Index"
import ProductCreate from "../components/Product/Create"
import ProductShow from "../components/Product/Show"
import ProductEdit from "../components/Product/Edit"

const routes = [
    {
        path: '/',
        name: 'product.index',
        component: ProductIndex,
    },
    {
        path: '/create',
        name: 'product.create',
        component: ProductCreate,
    },
    {
        path: '/:id',
        name: 'product.show',
        component: ProductShow,
        props: true,
    },
    {
        path: '/:id/edit',
        name: 'product.edit',
        component: ProductEdit,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router