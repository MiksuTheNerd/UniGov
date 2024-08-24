<script setup lang="ts">

import { ref } from 'vue'
import { reactive } from 'vue'

let props=defineProps(['navigation'])
let components=[
    "home",
    "profile",
    "communities",
    "home",
    "home",
    "home"
]
</script>

<template>
    <div id="menu">
        <div v-for="i in 6" :key="i" class="stripe" :style="{background: 'var(--stripe'+i+')', animationDelay: (i-1)*0.07+'s'}" @click="props.navigation.component=components[i-1]">{{"UNIGOV"[i-1]}}</div>
        
    </div>
</template>

<style scoped>
    #menu {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .stripe {
        height: 100%;
        width: calc(100% / 6);
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: slide 0.3s ease-in-out;
        animation-fill-mode: forwards;
        transform: translateY(-100%);
        transition: width 0.1s;
        opacity:1;
        cursor: pointer;
    }
    .stripe:hover {
        opacity: 0.7;
    }
    .stripe:nth-child(odd) {
        animation-name: slide2;
        transform: translateY(100%);
    }
    @keyframes slide {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes slide2 {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
