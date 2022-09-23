<template>
    <div class="list-container">
        <div class="list-header">
            <h3>{{label}}</h3>
        </div>
        <div class="list-body">
            <slot></slot>
        </div>
        <router-link v-if="showMore" :to="showMore" class="list-footer">
            <div class="list-show-more">Show more</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "TrendsForYou",
        props:['label', 'listData', 'showMore'],
    }
</script>

<style scoped>
    .list-container {
        width: 100%;
        margin: 10px 0 30px 0;
        border-radius: 18px;
        background-color: var(--color-main-grey2);
    }

    .list-container .list-header {
        padding: 15px 16px;
        margin: 3px;
    }

    .list-container .list-footer {
        margin: 0;
    }

    .list-container .list-footer .list-show-more{
        color: var(--color-main-blue);
        display: block;
        padding: 15px 16px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
    }

    .list-container .list-footer .list-show-more:hover {
        background-color: var(--color-main-grey1);
    }


    .list-container .list-header h3 {
        font-size: 20px;
        font-family: TwitterChirpHeavy, sans-serif;
    }


</style>