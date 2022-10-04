import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageTitle: "Twitter",
    },
    getters: {},
    mutations: {
        setPageTitle: function(state, value = "Twitter") {
            document.title = value;
        },
    },
    actions: {},
    modules: {},
});