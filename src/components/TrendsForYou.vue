<template>
    <list-card label="Trends for you" show-more="/trends">
        <div class="tfy-item" v-for="list in tfyData" :key="list.name">
            <div class="tfy-details">
                <div class="tfy-subject">{{list.subject}}</div>
                <div class="tfy-name">{{list.name}}</div>
                <!--TODO: Change numbers that biggest 1000 with 'K'-->
                <div class="tfy-tweets">{{list.tweets}} Tweets</div>
            </div>
            <div class="more">
                <i class="fa-solid fa-ellipsis more-icon"></i>
            </div>
        </div>
    </list-card>
</template>

<script>
import ListCard from "@/components/ListCard";
import store from "@/store/index";

export default {
    name: "TrendsForYou",
    components: { ListCard },
    data() {
        return {

        }
    },
    computed: {
        tfyData() {
            return store.state.allTfy;
        }
    },

    mounted() {
        store.commit('getAllTFY');
    }
}
</script>

<style scoped>
.tfy-item {
    display: flex;
    justify-content: space-between;
    padding: 7px 16px;
    cursor: pointer;
}

.tfy-item:hover {
    background-color: var(--color-main-grey1);
}

.tfy-details div {
    margin: 3px;
}

.tfy-item .tfy-subject {
    font-size: 13px;
    color: var(--color-main-black1);
}

.tfy-item .tfy-name {
    font-size: 15px;
    font-weight: bolder;
}

.tfy-item .tfy-tweets {
    font-size: 13px;
    color: var(--color-main-black1);
}

.tfy-item .more i {
    color: var(--color-main-black1);
    padding: 7px;
    border-radius: 50%;
}

.tfy-item .more i:hover {
    background-color: var(--color-main-blue-hover);
}
</style>