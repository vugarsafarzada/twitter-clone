<template>
    <div
            class="searchbox-container flex-row-start-center"
            :class="{'searchbox-container-onfocus': inputFocusHandler}"
    >
        <div class="magnifying-icon">
            <i
                    :class="{'magnifying-icon-onfocus': inputFocusHandler}"
                    class="fa-solid fa-magnifying-glass"
            ></i>
        </div>
        <label>
            <input
                    @focusin="inputFocusHandler=true"
                    @focusout="inputFocusHandler=false"
                    class="searchbox-input"
                    id="searchbox-input"
                    :class="{'searchbox-input-onfocus': inputFocusHandler}"
                    type="text"
                    placeholder="Search Twitter"
                    v-model="queryData"
            />
        </label>
        <div @click="closeSearching" id="close-search" class="close-search">
            <i v-if="queryData && showCloseSearch" class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainSearchBox",
        data() {
            return {
                inputFocusHandler: false,
                showCloseSearch: false,
                queryData: ''
            }
        },
        methods: {
            closeSearching: function () {
                this.queryData = "";
                document.getElementById('searchbox-input').focus()
            }
        },
        watch: {
            inputFocusHandler(val) {
                setTimeout(()=>{
                    this.showCloseSearch = val
                }, 150)
            }
        }
    }
</script>

<style scoped>
    .searchbox-container {
        background-color: var(--color-main-grey);
        height: 42px;
        border-radius: 30px;
    }

    .searchbox-container .magnifying-icon {
        padding: 20px;
    }

    .searchbox-container .searchbox-input {
        outline: none;
        width: 250px;
        height: 30px;
    }

    .searchbox-container .close-search {
        width: 10px;
    }

    .searchbox-container .close-search i {
        color: var(--color-main-blue);
        font-size: 24px;
        padding: 6px;
        cursor: pointer;
    }

    .searchbox-container-onfocus {
        background-color: var(--color-main-white);
        border: 1px solid var(--color-main-blue);
    }

    .searchbox-container .magnifying-icon-onfocus {
        color: var(--color-main-blue);
    }

    .searchbox-container .searchbox-input-onfocus {
        background-color: var(--color-main-white);
    }

</style>