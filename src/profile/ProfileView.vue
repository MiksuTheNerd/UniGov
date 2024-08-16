<script setup lang="ts">
//@ts-check
import PointsList from '@/profile/PointsList.vue';
import { translations } from '@/translations/current';
</script>

<template>
    <div class="profilePicture"></div>
    <h1>Test user</h1>
    <PointsList/>
    <button>{{ translations.settings }}</button>
    <div class="openPass">
        Uni<br>
        Gov<br>
        Pass
    </div>

</template>

<style scoped>
    button {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: var(--background2);
        position: absolute;
        border: 0;
        cursor: pointer;
    }
    button:nth-of-type(1) {
        top: 20px;
        right: 20px;
    }
    .openPass {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        height: 60px;
        padding: 10px;
        border-radius: 10px;
        border: 5px solid var(--background2);
        color: var(--background2);
        background: none;
        width: 35px;
        position: absolute;
        cursor: pointer;
    }
    h1 {
        text-align: center;
    }
    .profilePicture {
        width: 150px;
        height: 150px;
        background: var(--background2);
        border-radius: 50%;
        border: 5px solid var(--stripe1);
        margin: 30px auto;
    }
</style>
