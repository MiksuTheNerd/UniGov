<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import Login from './components/Login.vue'
import MainApp from './components/MainApp.vue'
const loggedIn=ref(false)

</script>

<template>
    <MainApp v-if="loggedIn"/>
    <Login :loggedIn="loggedIn" @updateLoggedIn="loggedIn = $event" v-else/>
</template>

<style scoped>

</style>
