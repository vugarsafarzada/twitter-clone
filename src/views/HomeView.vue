<template>
  <div class="home">
    <CreateNewPost />
    <PostTimeLine :data="posts" />
  </div>
</template>

<script>
import CreateNewPost from "@/components/CreateNewPost";
import PostTimeLine from "@/components/PostTimeLine.vue";
import store from "@/store/index";

export default {
  name: 'HomeView',
  components: {
    CreateNewPost, PostTimeLine
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return store.state.allPosts;
    }
  },
  mounted() {
    store.dispatch('getAllPosts');
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -3vw;
  overflow-y: scroll;
  padding-top: 60px
}
</style>