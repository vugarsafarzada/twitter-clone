<template>
    <div class="cnp-container flex-row-start-start">
        <div class="profile-pic-section">
            <img src="../assets/profile.jpg" alt="" class="profile-pic">
        </div>
        <div class="cnp-body">
            <div class="cnp-audience-section flex-row-space-around-center">
                Everyone <i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="cnp-tools">
                <div class="cnp-inp">
                    <label for="">
                        <textarea @keypress="setTextareaRows" class="cnp-content" id="cnp-content" :rows='textAreaRows'
                            :cols="textAreaColumns" v-model="contentText" placeholder="What's happening?">

                    </textarea>
                    </label>
                </div>
                <div class="cnp-who-can-reply">
                    <span>
                        <!--TODO: create a dropdown for it-->
                        <i class="fa-solid fa-earth-americas"></i>
                        Everyone can reply
                    </span>
                </div>
                <div class="cnp-publish flex-row-space-between-center">
                    <div class="cnp-add-media flex-row-space-between-center">
                        <div class="media-item">
                            <i class="fa-regular fa-image"></i>
                        </div>
                        <div class="media-item">
                            <i class="fa-brands fa-square-git"></i>
                        </div>
                        <div class="media-item">
                            <i class="fa-regular fa-square-poll-horizontal"></i>
                        </div>
                        <div class="media-item">
                            <i class="fa-regular fa-face-smile"></i>
                        </div>
                        <div class="media-item">
                            <i class="fa-regular fa-calendar-check"></i>
                        </div>
                        <div class="media-item">
                            <i class="fa-regular fa-location-dot"></i>
                        </div>
                    </div>
                    <div class="cnp-tweet-btn">
                        Tweet
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
            textAreaRows: 1,
            textAreaColumns: 50,
            textAreaColumnsLimit: 50,
            contentText: ""
        }
    },
    methods: {
        setTextareaRows(e) {
            if (e.key === "Enter" && this.textAreaRows < 20) {
                this.textAreaRows++;
            }
            if (e.key === "Backspace" && this.textAreaRows > 1) {
                this.textAreaRows--;
            }
        },
    },
    watch: {
        contentText(newVal, oldVal) {
            if (newVal.length < oldVal.length) {
                const rows = Number(this.contentText.length) / this.textAreaColumnsLimit;
                console.log('0', rows)
                if (rows > 1) {
                    console.log('1')
                    this.setTextareaRows({
                        key: 'Backspace'
                    });
                }
            }
            if (!newVal.length) {
                this.textAreaRows = 1;
            }
        }
    }
}
</script>

<style scoped>
.cnp-container {
    width: 616px;
    border-bottom: 1px solid var(--color-main-grey3);
}

.cnp-container .profile-pic-section img {
    background-color: var(--color-main-grey3);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 15px;
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
.cnp-who-can-reply>span,
i {
    color: var(--color-main-blue);
    font-weight: bolder;
    font-size: 14px;
}

.cnp-container .cnp-body .cnp-tools .cnp-inp .cnp-content {
    font-size: 20px;
    outline: none;
    margin: 0 5px;
}

.cnp-container .cnp-body .cnp-who-can-reply {
    padding: 15px 7px;
    cursor: pointer;
}

.cnp-container .cnp-body .cnp-who-can-reply span {
    width: 170px;
    text-align: center;
    display: inline-block;
    padding: 5px 0;
    border-radius: 30px;
    position: relative;
    right: 15px;
}

.cnp-container .cnp-body .cnp-who-can-reply span:hover {
    background-color: var(--color-main-blue-hover);
}

.cnp-container .cnp-tools .cnp-publish {
    border-top: 1px solid var(--color-main-grey3);
    padding: 10px 7px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-tweet-btn {
    background-color: var(--color-main-blue);
    padding: 10px 15px;
    border-radius: 30px;
    text-align: center;
    color: var(--color-main-white);
    opacity: 0.5;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    left: 10px;
    margin-right: 10px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-tweet-btn:hover {
    background-color: var(--color-main-blue);
    opacity: 0.9
}

.cnp-container .cnp-tools .cnp-publish .cnp-add-media {
    width: 200px;
}

.cnp-container .cnp-tools .cnp-publish .cnp-add-media .media-item i {
    font-size: 18px;
    cursor: pointer;
}
</style>
