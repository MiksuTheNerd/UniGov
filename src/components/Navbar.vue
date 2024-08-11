<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

</script>

<template>
    <div id="navbar">
        <span><router-link to="/home">H</router-link></span>
        <span><router-link to="/groups">G</router-link></span>
        <span><router-link to="/home">3</router-link></span>
        <span><router-link to="/home">4</router-link></span>
        <span><router-link to="/profile">S</router-link></span>
    </div>
</template>

<style scoped>
    @import "../assets/base.css";
    #navbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        position: absolute;
        bottom: 0;
        height: 80px;
        width: 100%;
        background: var(--background1);
    }
    span {
        cursor: pointer;
        width: 50px;
        height: 50px;
        line-height: 50px;
        color: var(--background1);
        background: var(--background2);
        display: inline-block;
        margin: 15px auto;
        padding: 0;
        text-align: center;
        border-radius: 50%;
    }
    
</style>
