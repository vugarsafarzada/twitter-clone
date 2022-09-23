<template>
  <div class="home">
      <h3>Hone</h3>
    <div v-for="i in 100" :key="i" style="margin-top: 30px">
        {{i}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid dignissimos dolor eligendi esse nostrum saepe tempore ullam veniam voluptatum!
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
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