<template>
    <div class="post-container flex-row-start-start">
        <div class="post-profile-picture">
            <img :src="post.author.profilePic" alt="" class="post-profile-pic">
        </div>
        <div class="post-body">
            <div class="post-info flex-row-space-between-center">
                <div class="author-info flex-row-start-start">
                    <div class="name text-heavy">{{post.author.name}}</div>
                    <div class="user-name">{{post.author.user_name}}</div>
                    <div>·</div>
                    <div class="post-date">{{post.content.date}}</div>
                </div>
                <div class="more">
                    <i class="fa-solid fa-ellipsis more-icon"></i>
                </div>
            </div>
            <div class="post-content">
                <div class="text">
                    <span>{{post.content.text}}</span>
                </div>
            </div>
            <div class="post-content-footer flex-row-space-between-center">
                <div @mouseover="reactionsHoverTrigger.comment = true"
                    @mouseleave="reactionsHoverTrigger.comment = false" class="post-comment flex-row-center-center">
                    <i :class="{'post-reaction-icon-onhover' : reactionsHoverTrigger.comment}"
                        class="post-reaction-icon fa-regular fa-comment"></i>
                    <span
                        :class="{'post-reaction-number-onhover': reactionsHoverTrigger.comment}">{{post.reactions.comment}}</span>
                </div>
                <div @mouseover="reactionsHoverTrigger.retweet = true"
                    @mouseleave="reactionsHoverTrigger.retweet = false" class="post-retweet flex-row-center-center">
                    <i :class="{'post-reaction-icon-onhover' : reactionsHoverTrigger.retweet}"
                        class="post-reaction-icon fa-solid fa-repeat"></i>
                    <span
                        :class="{'post-reaction-number-onhover': reactionsHoverTrigger.retweet}">{{post.reactions.retweet}}</span>
                </div>
                <div @mouseover="reactionsHoverTrigger.like = true" @mouseleave="reactionsHoverTrigger.like = false"
                    class="post-like flex-row-center-center">
                    <i :class="{'post-reaction-icon-onhover' : reactionsHoverTrigger.like}"
                        class="post-reaction-icon fa-regular fa-heart"></i>
                    <span
                        :class="{'post-reaction-number-onhover': reactionsHoverTrigger.like}">{{post.reactions.like}}</span>
                </div>
                <div class="post-share flex-row-center-center">
                    <i class="post-reaction-icon fa-solid fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TweetPost",
    props: ["post"],
    data() {
        return {
            reactionsHoverTrigger: {
                like: false,
                retweet: false,
                comment: false,
            }
        }
    }
}

</script>

<style scoped>
.post-container {
    padding: 15px 0;
    border-bottom: 1px solid var(--color-main-grey3);
}

.post-container:hover {
    cursor: pointer;
    background-color: var(--color-main-grey2);
}

.post-container .post-body {
    margin: 5px 0;
}

.post-container .post-info {
    width: 515px;
}

.post-container .post-info .author-info {
    margin-bottom: 4px;
}

.post-container .post-body .post-info .author-info>div {
    margin-right: 5px;
    font-size: 14px;
}

.post-container .post-body .post-info .author-info>.user-name,
.post-container .post-body .post-info .author-info>.post-date {
    color: var(--color-main-black1)
}

.post-container .post-body .post-content {
    padding-right: 40px;
}

.post-body .more i {
    color: var(--color-main-black1);
    border-radius: 50%;
}

.post-body .more i:hover {
    /*background-color: var(--color-main-blue-hover);*/
    cursor: pointer;
}

.post-body .post-content-footer {
    width: 450px;
    margin-top: 5px;
    position: relative;
    right: 10px;
}

.post-body .post-content-footer .post-reaction-icon {
    color: var(--color-main-black1);
    margin-right: 5px;
    padding: 10px;
    border-radius: 50%;
}

.post-body .post-content-footer .post-reaction-icon:last-child {
    margin-right: 0;
}

.post-body .post-content-footer>div span {
    color: var(--color-main-black1);
    font-size: 13px;
}

.post-content-footer .post-comment .post-reaction-number-onhover {
    cursor: pointer;
    color: var(--color-main-blue) !important;
}

.post-content-footer .post-comment .post-reaction-icon-onhover {
    cursor: pointer;
    background-color: var(--color-main-blue-hover);
    color: var(--color-main-blue) !important;
    border-radius: 50%;
}

.post-content-footer .post-retweet .post-reaction-number-onhover {
    cursor: pointer;
    color: var(--color-main-green) !important;
}

.post-content-footer .post-retweet .post-reaction-icon-onhover {
    cursor: pointer;
    background-color: var(--color-main-green1);
    color: var(--color-main-green) !important;
    border-radius: 50%;
}

.post-content-footer .post-like .post-reaction-number-onhover {
    cursor: pointer;
    color: var(--color-main-red) !important;
}

.post-content-footer .post-like .post-reaction-icon-onhover {
    cursor: pointer;
    background-color: var(--color-main-red1);
    color: var(--color-main-red) !important;
    border-radius: 50%;
}

.post-content-footer .post-share:hover {
    background-color: var(--color-main-blue-hover);
    border-radius: 50%;
}

.post-content-footer .post-share .post-reaction-icon:hover {
    color: var(--color-main-blue);
}
</style>