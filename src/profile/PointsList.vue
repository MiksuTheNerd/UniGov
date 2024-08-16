<script setup lang="ts">
//@ts-check
import { translations } from '@/translations/current';
</script>

<template>
    <div class="pointsContainer">
        <h2>{{ translations.points }}</h2>

        <div class="pointsList">
            <span>{{ translations.improvementPoints }}</span><span>361</span>
            <span>{{ translations.accessibilityPoints }}</span><span>7384</span>
            <span>{{ translations.volunteerPoints }}</span><span>34</span>
            <span>{{ translations.improvementPoints }}</span><span>98024</span>
            <span>{{ translations.localPoints }}</span><span>93870</span>

        </div>
    </div>
</template>

<style scoped>
   .pointsList {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    h2 {
        text-align: center;
        margin-top: 0;
    }
   .pointsContainer {
        background: var(--background2);
        border-radius: 10px;
        width: 90%;
        margin: auto;
        padding: 10px;
        box-sizing: border-box;
    }
</style>
