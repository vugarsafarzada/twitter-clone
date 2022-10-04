<template>
    <div>
        <TweetPost v-for="(post, index) in data" :post="post" :key="index" />
    </div>
</template>

<script>
import TweetPost from './TweetPost.vue';
export default {
    name: "PostTimeLine",
    props: ["data"],
    components: { TweetPost },
    data() {
        return {
        }
    },
}
</script>

<style scoped>

</style>