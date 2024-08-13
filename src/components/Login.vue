<script setup lang="ts">
import {translations} from '../translations/current'
import {ref} from "vue"

const props = defineProps(['loggedIn']);
const emit = defineEmits(['updateLoggedIn']);

const password=ref("")
const username=ref("")

function tryLogin() {
    emit("updateLoggedIn", true)
}
</script>

<template>
    <h1>{{translations.loginText}}</h1>
    <form @submit.prevent="tryLogin">
        <span>{{ translations.username }}</span>
        <input v-model="username" type="text">
        <span>{{ translations.password }}</span>
        <input v-model="password"type="password">
        <input type="submit" v-bind:value=translations.loginText>
    </form>
    
</template>

<style scoped>
form {
    width: 300px;
}
</style>
