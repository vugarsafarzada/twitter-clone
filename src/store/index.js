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
    getters: {},
    mutations: {
        setPageTitle(state, value = "Twitter") {
            document.title = value;
        },
        getAllPosts(state, data) {
            state.allPosts = data;
        },
        getAllTFY(state, data) {
            state.allTfy = data;
        },
        getAllWTF(state, data) {
            state.allWtf = data;
        },
    },
    actions: {
        async getAllPosts(store) {
            const data = await requestToAPI("/post/all");
            store.commit("getAllPosts", data);
        },
        async getAllTFY(store) {
            const data = await requestToAPI("/tfy/all-tfy");
            store.commit("getAllTFY", data);
        },
        async getAllWTF(store) {
            const data = await requestToAPI("/wtf/all-wtf");
            store.commit("getAllWTF", data);
        },
    },
    modules: {},
});

async function requestToAPI(to) {
    const res = await fetch(`${process.env.VUE_APP_API_URL}/api${to}`);
    const data = await res.json();
    return data;
}