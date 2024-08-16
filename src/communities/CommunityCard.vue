<script setup lang="ts">
//@ts-check
import { translations } from '@/translations/current';
const props = defineProps(["data"])
</script>

<template>
    <div class="communityCard">
        <h2>{{ props.data.name }}</h2>
        <p>{{ props.data.desc }}</p>
    </div>
</template>

<style scoped>
    .communityCard {
        background: var(--background2);
        border-radius: 10px;
        width: 350px;
        padding: 10px;
        box-sizing: border-box;
        height: 150px;
        display: inline-block;
    }
</style>
