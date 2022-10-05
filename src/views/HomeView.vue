<template>
  <div class="home">
    <CreateNewPost />
    <PostTimeLine :data="posts" />
  </div>
</template>

<script>
import CreateNewPost from "@/components/CreateNewPost";
import PostTimeLine from "@/components/PostTimeLine.vue";
export default {
  name: 'HomeView',
  components: {
    CreateNewPost, PostTimeLine
  },
  data() {
    return {}
  },
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