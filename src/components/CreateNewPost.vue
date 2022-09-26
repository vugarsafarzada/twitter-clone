<template>
    <div class="cnp-container flex-row-start-start">
        <div class="profile-pic-section">
            <img src="https://pbs.twimg.com/profile_images/1574086897818902528/k3GCX_vm_400x400.jpg" alt=""
                class="post-profile-pic">
        </div>
        <div class="cnp-body">
            <div v-if="textAreaFocusTrigger" class="cnp-audience-section flex-row-space-around-center">
                Everyone <i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="cnp-tools">
                <div class="cnp-inp">
                    <label for="">
                        <textarea :maxlength="textAreaLengthLimit" id="cnp-content" class="cnp-content"
                            @focusin="textAreaFocusTrigger = true" :rows='calculateTextAreaRows' :cols="textAreaColumns"
                            v-model="contentText" placeholder="What's happening?">
                    </textarea>
                    </label>
                </div>
                <div class="cnp-who-can-reply" v-if="textAreaFocusTrigger">
                    <!--TODO: Create a dropdown for it-->
                    <button>
                        <i class="fa-solid fa-earth-americas"></i>
                        Everyone can reply
                    </button>
                </div>
                <div class="cnp-publish flex-row-space-between-center">
                    <div class="cnp-add-media flex-row-space-between-center">
                        <div class="media-item" title="Media">
                            <i class="fa-regular fa-image"></i>
                        </div>
                        <div class="media-item" title="GIF">
                            <div class="text-heavy gif-icon flex-row-center-center">
                                GIF
                            </div>
                        </div>
                        <div class="media-item" title="Poll">
                            <i class="fa-solid fa-square-poll-horizontal"></i>
                        </div>
                        <div class="media-item" title="Emoji">
                            <i class="fa-regular fa-face-smile"></i>
                        </div>
                        <div class="media-item" title="Schedule">
                            <i class="fa-regular fa-calendar-check"></i>
                        </div>
                        <div class="media-item" title="Location">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                    </div>
                    <!--TODO: Button shouldn't click if content text length is 0 -->
                    <div class="cnp-share-section flex-row-center-center">
                        <div class="cnp-text-limit" v-if="calculateContentTextLength">
                            {{calculateContentTextLength}} / {{textAreaLengthLimit}}
                        </div>
                        <button class="cnp-tweet-btn" :class="{'disable-btn' : !calculateContentTextLength }">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateNewPost",
    data() {
        return {
            textAreaColumns: 50,
            textAreaFocusTrigger: false,
            textAreaLengthLimit: 280,
            contentText: "",
        }
    },
    methods: {
    },
    computed: {
        calculateContentTextLength() {
            return this.contentText.trim().length;
        },
        calculateTextAreaRows() {
            if (!this.contentText.length) {
                return 1;
            }
            const newLines = this.contentText.split('\n').length;
            return Number((this.contentText.length / 45).toFixed(0)) + newLines;
        }

    },
}
</script>

<style scoped>
.cnp-container {
    width: 616px;
    border-bottom: 1px solid var(--color-main-grey3);
}

.cnp-container .cnp-body .cnp-audience-section {
    width: 110px;
    padding: 1px 14px;
    border-radius: 30px;
    border: 2px solid var(--color-main-grey3);
    background-color: var(--color-main-white);
    margin: 5px 0 20px 0;
}

.cnp-container .cnp-body .cnp-audience-section:hover {
    background-color: var(--color-main-blue-hover);
    cursor: pointer;
}

.cnp-container .cnp-body .cnp-audience-section,
.cnp-who-can-reply>button {
    color: var(--color-main-blue);
    font-weight: bolder;
    font-size: 14px;
}

.cnp-container .cnp-body i {
    color: var(--color-main-blue);
}

.cnp-container .cnp-body .cnp-tools .cnp-inp .cnp-content {
    font-size: 20px;
    outline: none;
    margin: 10px 5px;
    resize: none;
}

.cnp-container .cnp-body .cnp-who-can-reply {
    border-bottom: 1px solid var(--color-main-grey3);
    padding: 10px 7px 15px 5px;
    cursor: pointer;
}

.cnp-container .cnp-body .cnp-who-can-reply button {
    width: 170px;
    text-align: center;
    display: inline-block;
    padding: 5px 0;
    border-radius: 30px;
    position: relative;
    right: 15px;
}

.cnp-container .cnp-body .cnp-who-can-reply button:hover {
    background-color: var(--color-main-blue-hover);
}

.cnp-container .cnp-tools .cnp-publish {
    padding: 10px 7px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-tweet-btn {
    background-color: var(--color-main-blue);
    padding: 8px 15px;
    border-radius: 30px;
    text-align: center;
    color: var(--color-main-white);
    font-weight: 800;
    cursor: pointer;
    position: relative;
    left: 10px;
    margin-right: 10px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-tweet-btn.disable-btn {
    opacity: 0.5;
    cursor: default;
}

.cnp-container .cnp-tools .cnp-publish .cnp-add-media {
    width: 210px;
    position: relative;
    right: 8px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-add-media .media-item i,
.gif-icon {
    font-size: 18px;
    cursor: pointer;
}

.cnp-container .cnp-tools .cnp-publish .cnp-share-section .cnp-text-limit {
    color: var(--color-main-blue);
    font-weight: bolder;
    font-size: 11px;
}

.cnp-container .cnp-add-media .media-item .gif-icon {
    font-size: 8px;
    width: 20px;
    height: 17px;
    border: 2px solid var(--color-main-blue);
    color: var(--color-main-blue);
    border-radius: 2.5px;
}

.cnp-container .cnp-add-media .media-item {
    padding: 8px;
    border-radius: 50%;
}

.cnp-container .cnp-add-media .media-item:hover {
    background-color: var(--color-main-blue-hover);
}
</style>
