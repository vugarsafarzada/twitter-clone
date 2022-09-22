<template>
    <div class="main-layout flex-row-center-center">
        <header>
            <Header/>
        </header>
        <main class="flex-row-space-around-flex-start">
            <div class="timeline">
                <div class="flex-row-space-between-center default-main-headers-height">
                    <h3 class="timeline-title">Home</h3>
                    <div class="top-tweets flex-row-center-center">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
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
        height: 100vh;
        width: 1250px;
    }

    .main-layout > header {
        width: 21%;
        height: 100%;
    }

    .main-layout > main {
        height: 100%;
        width: 79%;
    }

    .main-layout > main .timeline {
        width: 65%;
        height: 100%;
        border-left: 1px solid var(--color-main-grey3);
        border-right: 1px solid var(--color-main-grey3);
        padding: 0 15px;
    }

    .main-layout > main .sidebar {
        width: 40%;
        height: 100%;
    }

    .timeline > .default-main-headers-height {
        border-bottom: 1px solid var(--color-main-grey3);
    }

    .timeline .top-tweets {
        width: 35px;
        padding: 7px;
        cursor: pointer;
    }

    .timeline .timeline-title{
        font-family: TwitterChirpHeavy, sans-serif;
        font-weight: bold;
    }

    .timeline .top-tweets:hover {
        background-color: var(--color-main-grey3);
        border-radius: 50%;
    }
</style>