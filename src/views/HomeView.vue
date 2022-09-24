<template>
  <div class="home">
      <CreateNewPost/>
  </div>
</template>

<script>
// @ is an alias to /src

import CreateNewPost from "@/components/CreateNewPost";
export default {
  name: 'HomeView',
  components: {
      CreateNewPost
  }
}
</script>

<style scoped>
    .home{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -3vw;
        overflow-y: scroll;
        padding-top:60px
    }
</style>