<script setup lang="ts">
import CommunitiesView from '@/communities/CommunitiesView.vue';
import HomeView from '@/home/HomeView.vue';
import ProfileView from '@/profile/ProfileView.vue';
import { ref } from 'vue'

const props= defineProps(["state"])

</script>

<template>
    <nav id="navbar">
            <span @click="props.state.component=HomeView">1</span>
            <span @click="props.state.component=CommunitiesView">C</span>
            <span @click="props.state.component=HomeView">H</span>
            <span @click="props.state.component=HomeView">4</span>
            <span @click="props.state.component=ProfileView">P</span>
    </nav>
</template>

<style scoped>

    #navbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        background: var(--stripe3);
    }
    span {
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
