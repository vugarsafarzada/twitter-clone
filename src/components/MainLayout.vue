<template>
    <div class="main-layout flex-row-center-center">
        <header>
            <Header/>
        </header>
        <main class="flex-row-space-around-flex-start">
            <div class="timeline">
                <div class="default-main-headers-height"></div>
                <slot></slot>
            </div>
            <div class="sidebar">
                <Sidebar/>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Sidebar from "@/components/Sidebar";

    export default {
        name: "MainLayout",
        components: {Header, Sidebar},
    }
</script>

<style scoped>
    .main-layout {
        background-color: red;
        height: 100vh;
        width: 1250px;
    }
    .main-layout > header {
        background-color: #1D9BF0;
        width: 21%;
        height: 100%;
    }
    .main-layout > main {
        background-color: royalblue;
        height: 100%;
        width: 79%;
    }
    .main-layout > main .timeline {
        width: 60%;
        height: 100%;
        background-color: orange;
    }
    .main-layout > main .sidebar {
        width: 40%;
        height: 100%;
        background-color: lawngreen;
    }
</style>