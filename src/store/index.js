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
            data = addAuthorInfo(data);
            setTimeout(() => {
                state.allPosts = shuffle(data);
            }, 500);
        },
        getAllTFY(state, data) {
            state.allTfy = shuffle(data);
        },
        getAllWTF(state, data) {
            state.allWtf = shuffle(data);
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

function addAuthorInfo(array) {
    const data = [...array];
    data.forEach(async(item) => {
        const author_data = await requestToAPI(`/user/${item.user_id}`);
        item["author"] = author_data.user_info;
    });
    return data;
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}