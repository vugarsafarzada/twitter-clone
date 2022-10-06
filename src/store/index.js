import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageTitle: "Twitter",
        allPosts: [],
    },
    getters: {
        getAllPosts: (state) => {
            return state.allPosts;
        },
    },
    mutations: {
        setPageTitle: function(state, value = "Twitter") {
            document.title = value;
        },
        async getAllPostsAPI(state) {
            const res = await fetch(`${process.env.VUE_APP_API_URL}/api/post/all`);
            const data = await res.json();
            state.allPosts = data;
        },
    },
    actions: {},
    modules: {},
});