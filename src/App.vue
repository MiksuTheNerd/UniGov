<script setup lang="ts">

import { ref } from 'vue'
import { reactive } from 'vue'
import Login from './login/Login.vue'
import HomeView from './home/HomeView.vue';
import CommunitiesView from './communities/CommunitiesView.vue';
import ProfileView from './profile/ProfileView.vue';
import Menu from './general/Menu.vue';
import { translations } from './translations/current';


const loggedIn=ref(false)
enum Components {
    Menu="menu",
    Home="home",
    Communities="communities",
    Profile="profile"
}
const state=reactive({component:Components.Menu as Components})
let diagonalUIHeight=ref(0)

let angleDeg=30
function setSize() {
    
    let k=Math.tan(angleDeg*Math.PI/180)
    
    let triangleHeight=150
    diagonalUIHeight.value=Math.abs(-k*window.innerHeight-window.innerWidth)/Math.sqrt(k*k+1)-2*triangleHeight
}
window.onresize=setSize
setSize()

</script>

<template>
    <div v-if="loggedIn">
        <div id="diagonalUI" :style="{width: diagonalUIHeight+'px', transform: 'translate(-50%, -50%) rotate('+angleDeg+'deg)'}">
            <Menu v-if="state.component == 'menu'" :navigation="state"/>
            <div id="appContainer" :style="{transform:'rotate(-'+0+'deg)'}">    
                <HomeView v-if="state.component == 'home'" />
                <CommunitiesView v-if="state.component == 'communities'"/>
                <ProfileView v-if="state.component == 'profile'"/>
            </div>
        </div>
        <div class="stripe stripe1" @click="state.component=Components.Menu">
            <h2>Menu</h2>
        </div>
        <div class="stripe stripe2">
            <h2>{{ translations[state.component] }}</h2>
        </div>
    </div>
    <Login :loggedIn="loggedIn" @updateLoggedIn="loggedIn = $event" v-else/>
</template>

<style scoped>
    #diagonalUI {
        position: absolute;
        height: 150vmax;
        top: 50%;
        left: 50%;
        overflow-x: visible;
        background: var(--background1);
        z-index: 10;
    }
    #appContainer {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 50vmax;
        padding-bottom: 100vmax;
        overflow-y: auto;
        overflow-x: hidden;
    }
    #appContainer>* {

        transform: rotate(-30deg);
    }
    .stripe {
        position: absolute;
        color: var(--background2);
        background: var(--background3);
        width: 400px;
        height: 150px;
        text-align: center;
    }
    .stripe1 {
        transform: translate(50%, -50%) rotate(300deg);
        bottom: -50px;
        right: 30px;
    }
    .stripe2 {
        top: -50px;
        left: 30px;
        transform: translate(-50%, 50%) rotate(300deg);
    }
    .stripe2>h2 {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    
</style>
