import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: function() {
            return setPageRoute("Home");
        },
    },
    {
        path: "/explore",
        name: "explore",
        component: function() {
            return setPageRoute("Explore");
        },
    },
    {
        path: "/notifications",
        name: "notifications",
        component: function() {
            return setPageRoute("Notifications");
        },
    },
    {
        path: "/messages",
        name: "messages",
        component: function() {
            return setPageRoute("Messages");
        },
    },
    {
        path: "/bookmarks",
        name: "bookmarks",
        component: function() {
            return setPageRoute("Bookmarks");
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;

function setPageRoute(value) {
    store.commit("setPageTitle", `${value} / Twitter`);
    return import (`../views/${value}View.vue`);
}