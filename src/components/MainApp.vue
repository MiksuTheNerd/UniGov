<script setup lang="ts">
//@ts-check
import Navbar from './Navbar.vue'

</script>

<template>
    <Navbar/>
</template>

<style scoped>
    @import "../assets/base.css";
    #navbar {
        position: absolute;
        bottom: 0;
        height: 80px;
        width: 100%;
        background: var(--background1);
    }
</style>
