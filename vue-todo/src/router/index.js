import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../components/MainView.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../components/LoginView.vue")
        },
        {
            path: "/user/:id",
            name: "user",
            component: () => import("../components/UserView.vue"),
            // children: [
            //     // 중첩 라우터 /user/:id/update
            //     { path: "update", component: () => import("../components/UserUpdate.vue") },
            //     { path: "delete", component: () => import("../components/UserDelete.vue") }
            // ]
        },
        // {
        //     path: "*", // /:pathName(.*) any URL
        //     name: "notFound",
        //     component: () => import("../components/NotFound.vue")
        // }
    ]
})

export default router;