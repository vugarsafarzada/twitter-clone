<template>
    <list-card label="Who to follow" show-more="/follows">
        <div class="wtf-item flex-row-space-between-center" v-for="list in followSuggestions" :key="list.name">
            <router-link :to="list.user_name" class="wtf-profile flex-row-start-center">
                <div class="wtf-profile-pic">
                    <img class="post-profile-pic" :src="setImgSrc(list.profile_pic)" alt="">
                </div>
                <div class="wtf-details">
                    <div class="wtf-name">{{list.name}}</div>
                    <div class="wtf-tweets">@{{list.user_name}}</div>
                </div>
            </router-link>
            <button v-if="!followed.includes(list.user_name)" @click="followRequest(list.user_name)"
                class="follow-btn text-heavy flex-row-center-center">
                Follow
            </button>
            <input v-else type="button" @mouseenter="unfollowBtnHoverTrigger=list.user_name"
                @mouseout="unfollowBtnHoverTrigger=null" @click="followRequest(list.user_name)"
                :class="{'unfollow-btn-onhover': unfollowBtnHoverTrigger === list.user_name}"
                class="text-heavy follow-btn unfollow-btn flex-row-center-center"
                :value="unfollowBtnHoverTrigger === list.user_name ? 'Unfollow' : 'Following'" />

        </div>
    </list-card>
</template>s

<script>
import ListCard from "@/components/ListCard";
import store from '@/store/index';

export default {
    name: "WhoToFollow",
    components: { ListCard },
    data() {
        return {
            followed: [],
            unfollowBtnHoverTrigger: null,
        }
    },
    computed: {
        followSuggestions() {
            return store.state.allWtf;
        }
    },
    methods: {
        followRequest(id) {
            if (!this.followed.includes(id)) {
                this.followed.push(id);
            } else {
                let index = this.followed.indexOf(id);
                if (index !== -1) {
                    this.followed.splice(index, 1);
                }
            }
        },
        setImgSrc(name) {
            return require(`../assets/${name}`)
        }
    }
}
</script>

<style scoped>
.wtf-item {
    padding: 10px 16px;
    margin: 0;
    cursor: pointer;
}

.wtf-item:hover {
    background-color: var(--color-main-grey1);
}

.wtf-profile {
    width: 100%;
    margin: 0;
}

.wtf-details div {
    margin: 3px;
}

.wtf-item .wtf-name {
    font-size: 15px;
    font-weight: bolder;
}

.wtf-item .wtf-tweets {
    font-size: 13px;
    color: var(--color-main-black1);
}

.wtf-item .follow-btn {
    font-size: 13px;
    color: var(--color-main-white);
    background-color: var(--color-main-black);
    height: 30px;
    padding: 16px;
    border-radius: 30px;
}

.wtf-item .unfollow-btn {
    width: 100px;
    padding: 0 16px;
    background-color: transparent;
    color: var(--color-main-black);
    border: 1px solid var(--color-main-black1);
}

.wtf-item .unfollow-btn-onhover {
    width: 110px;
    background-color: var(--color-main-red1);
    color: var(--color-main-red);
    border: 2px solid var(--color-main-red2);
}


.wtf-item .wtf-profile .wtf-profile-pic img {
    margin: 0 8px 0 0;
}
</style>