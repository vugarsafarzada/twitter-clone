import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageTitle: "Twitter",
        allPosts: [],
        allTfy: [],
        allWtf: [],
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
        async getAllTFY(state) {
            const res = await fetch(`${process.env.VUE_APP_API_URL}/api/tfy/all-tfy`);
            const data = await res.json();
            state.allTfy = data;
        },
        async getAllWTF(state) {
            const res = await fetch(`${process.env.VUE_APP_API_URL}/api/wtf/all-wtf
            `);
            const data = await res.json();
            state.allWtf = data;
        },
    },
    actions: {},
    modules: {},
});