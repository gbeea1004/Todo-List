import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/Dashboard';
import MyInfo from '../components/MyInfo';
import NotFound from '../components/NotFound';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            component: Dashboard
        },
        {
            path: "/myinfo",
            component: MyInfo
        },
        {
            path: "/*",
            component: NotFound
        }
    ]
});

export default router;