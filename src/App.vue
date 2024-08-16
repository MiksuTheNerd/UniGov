<script setup lang="ts">

import Navbar from './general/Navbar.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
import Login from './login/Login.vue'
const loggedIn=ref(false)
const state=reactive({component:0})
</script>

<template>
    <div v-if="loggedIn">
        <div id="appContainer">
            <state.component/>
        </div>
        <Navbar :state="state"/>
    </div>
    <Login :loggedIn="loggedIn" @updateLoggedIn="loggedIn = $event" v-else/>
</template>

<style scoped>
    #appContainer {
        position: absolute;
        width: 100%;
        height: calc(100% - 50px);
        overflow-y: auto;
    }
</style>
