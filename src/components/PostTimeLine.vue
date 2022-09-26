<template>
    <div>
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />
        <TweetPost v-for="post in data" :post="post" :key="post.id" />

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