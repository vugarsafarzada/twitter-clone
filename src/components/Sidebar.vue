<template>
    <div>
        <div class="default-main-headers-height">
            <MainSearchBox/>
        </div>
    </div>
</template>

<script>
    import MainSearchBox from "@/components/MainSearchBox";
    export default {
        name: "Sidebar",
        components: {MainSearchBox}
    }
</script>

<style scoped>
    .default-main-headers-height{
        padding: 8px 5px 0 25px;
    }
</style>