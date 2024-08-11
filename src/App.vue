<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
import Login from './components/Login.vue'
const loggedIn=ref(false)

</script>

<template>
    <div v-if="loggedIn">
        <RouterView/>
        <Navbar/>
    </div>
    <Login :loggedIn="loggedIn" @updateLoggedIn="loggedIn = $event" v-else/>
</template>

<style scoped>

</style>
