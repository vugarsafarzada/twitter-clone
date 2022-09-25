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

export default {
    name: "TrendsForYou",
    components: { ListCard },
    data() {
        return {
            tfyData: [
                {
                    subject: "Trending in Azerbaijan",
                    name: "#National",
                    tweets: 6055

                },
                {
                    subject: "Trending",
                    name: "Slava Ukraini",
                    tweets: 62300

                },
                {
                    subject: "Trending",
                    name: "Grain",
                    tweets: 2069

                },
                {
                    subject: "Trending",
                    name: "Ubuntu",
                    tweets: 4291

                },
                {
                    subject: "Trending",
                    name: "Tubbo",
                    tweets: 3476

                },
                {
                    subject: "Trending",
                    name: "OURPLE",
                    tweets: 3378

                },
                {
                    subject: "Trending",
                    name: "Episode 6",
                    tweets: 21000

                },
                {
                    subject: "Trending",
                    name: "President",
                    tweets: 832000

                },
                {
                    subject: "Trending",
                    name: "Sony",
                    tweets: 6055

                },
                {
                    subject: "Trending",
                    name: "#RANBOO",
                    tweets: 6055

                },
            ]
        }
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