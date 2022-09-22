<template>
    <div id="app" class="flex-row-center-center">
        <MainLayout>
            <router-view/>
        </MainLayout>
    </div>
</template>

<script>
    import MainLayout from "@/components/MainLayout";
    import store from "@/store/index";
    export default {
        name:"App",
        components: {MainLayout},
        created() {
        }
    }
</script>

<style lang="scss">
    @import "./styles/Global.css";
</style>
