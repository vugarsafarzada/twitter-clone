<template>
    <div id="app" class="flex-row-center-center">
        <MainLayout>
            <router-view/>
        </MainLayout>
    </div>
</template>

<script>
    import MainLayout from "@/components/MainLayout";

    export default {
        name:"App",
        components: {MainLayout},
    }
</script>

<style lang="scss">
    @import "./styles/Global.css";
</style>
