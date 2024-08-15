<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav id="navbar">
        <router-link class="navbar-item" to="/home"><span>1</span></router-link>
        <router-link class="navbar-item" to="/communities"><span>C</span></router-link>
        <router-link class="navbar-item" to="/home"><span>H</span></router-link>
        <router-link class="navbar-item" to="/home"><span>4</span></router-link>
        <router-link class="navbar-item" to="/profile"><span>P</span></router-link>
    </nav>
</template>

<style scoped>
    @import "../assets/base.css";
    #navbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        background: var(--stripe3);
    }
    .navbar-item {
        cursor: pointer;
        margin: auto;
        width: 50px;
        height: 50px;
        line-height: 50px;
        color: var(--stripe1);
        display: block;
        padding: 0;
        text-align: center;
        text-decoration: none;
        border: none;
    }
    
</style>
