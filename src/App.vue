<template>
    <div id="app" class="flex-row-center-center">
        <MainLayout>
            <router-view />
        </MainLayout>
    </div>
</template>

<script>
//TODO: Post page
//TODO: Profile page
//TODO: Backend with Express.js
//TODO: Create a post
//TODO: Responsibility

import MainLayout from "@/components/MainLayout";
import store from "@/store/index";
export default {
    name: "App",
    components: { MainLayout },
    created() {
    }
}
</script>

<style lang="scss">
@import "./styles/Global.css";
</style>
