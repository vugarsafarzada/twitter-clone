<template>
    <div class="sidebar-container">
        <div class="sidebar-searchbox-container default-main-headers-height flex-row-center-center">
            <MainSearchBox/>
        </div>
        <div class="lists">
            <TrendsForYou/>
            <WhoToFollow/>
        </div>
        <div class="sidebar-footer">
          <div class="footer-links">
              <router-link class="f-link" to="/tos"> Terms of Service </router-link>
              <router-link class="f-link" to="/privacy"> Privacy Policy </router-link>
              <router-link class="f-link" to="/cookiePolice"> Cookie Policy </router-link>
              <router-link class="f-link" to="/accessibility"> Accessibility </router-link>
              <router-link class="f-link" to="/adsInfo"> Ads info </router-link>
              <router-link class="f-link" to="/#">
                  More
                  <i class="fa-solid fa-ellipsis more-icon"></i>
              </router-link>
              <br>
              <span class="f-copyright">
                  © 2022 Vugar Safarzada
              </span>
          </div>
        </div>
    </div>
</template>

<script>
    import MainSearchBox from "@/components/MainSearchBox";
    import TrendsForYou from "@/components/TrendsForYou";
    import WhoToFollow from "@/components/WhoToFollow";
    export default {
        name: "Sidebar",
        components: {WhoToFollow, TrendsForYou, MainSearchBox}
    }
</script>

<style scoped>
    .sidebar-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color:var(--color-main-white);
        padding: 0 5px 0 25px;
    }

    .sidebar-container .lists{
        margin-top: 60px;
        width: 100%;
    }
    
    .sidebar-container .sidebar-searchbox-container{
        margin:0;
        position: fixed;
        background-color: var(--color-main-white);
        width: 375px;
    }

    .sidebar-footer .footer-links{
        margin-bottom: 150px;
    }

    .sidebar-footer .footer-links .f-link, .f-copyright{
        font-size: 12px;
        color: var(--color-main-black1);
    }

    .sidebar-footer .footer-links .f-copyright{
        margin: 10px;
    }

    .sidebar-footer .footer-links .f-link:hover{
        text-decoration: underline;

    }


</style>