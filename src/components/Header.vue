<template>
    <div class="header-container">
        <div class="default-main-headers-height">
            <router-link to="/" class="twitter-main-icon flex-row-center-center">
                <i class="fa-brands fa-twitter twitter-icon"></i>
            </router-link>
        </div>
        <div class="header-navigation">
            <router-link class="header-nav-link" to="/">
                <i class="fa-solid fa-house"></i>
                <div>Home</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-hashtag"></i>
                <div>Explore</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-bell"></i>
                <div>Notifications</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-envelope"></i>
                <div>Messages</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-bookmark"></i>
                <div>Bookmarks</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-rectangle-list"></i>
                <div>Lists</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-regular fa-user"></i>
                <div>Profile</div>
            </router-link>
            <router-link class="header-nav-link" to="/">
                <i class="fa-solid fa-ellipsis more-icon"></i>
                <div>More</div>
            </router-link>
            <div class="create-tweet">
                Tweet
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .twitter-icon {
        color: var(--color-main-blue);
        font-size: 30px;
    }

    .twitter-main-icon {
        width: 30px;
        height: 30px;
        padding: 25px;
        border-radius: 50%;
        position: relative;
        left: 10px;
    }

    .twitter-main-icon:hover {
        background-color: var(--color-main-blue-hover);
    }

    .header-navigation {
        max-width: 200px;

    }

    .header-navigation .header-nav-link {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 15px;

    }

    .header-navigation .header-nav-link:hover {
        background-color: var(--color-main-grey3);
        border-radius: 30px;
    }

    .header-navigation .header-nav-link > div {
        color: var(--color-main-black);
        font-weight: 500;
        font-size: 20px;
        border-radius: 30px;
    }

    .header-nav-link i {
        color: var(--color-main-black);
        font-size: 25px;
        margin-right: 10px;
        width: 30px;
    }

    .header-nav-link i.more-icon {
        border: 2px solid var(--color-main-black);
        border-radius: 50%;
        font-size: 20px;
        padding: 4px;
        margin-right: 10px;
        width: 30px;

    }

    .create-tweet {
        margin-top: 30px;
        background-color: var(--color-main-blue);
        padding: 15px 20px;
        width: 200px;
        border-radius: 30px;
        text-align: center;
        color: var(--color-main-white);
        font-weight: 800;
        cursor: pointer;
        position: relative;
        left: 10px;
    }


    .create-tweet:hover {
        background-color: var(--color-main-blue);
        opacity: 0.9
    }

</style>