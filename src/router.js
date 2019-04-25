import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Example from './views/example';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            // 当 /example 匹配成功
            // component: Home 会被渲染在 App.vue 的 <router-view/> 中
            path: "/example",
            name: "演示 Demo",
            component: Example,
            // component: () => import("./views/example"),
            // children: [
            //     {
            //         // 当 /example/posts 匹配成功
            //         // component: Home 会被渲染在 `./views/example` 的 <router-view/> 中
            //         path: 'posts',
            //         component: Home
            //     }
            // ]
        },
        // 404 页面
        {path: '*', component: () => import("./views/404.vue"),}
    ]
});