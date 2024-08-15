<script setup lang="ts">
import { translations } from '@/translations/current';
import CommunityCard from '@/components/CommunityCard.vue'
import { reactive } from 'vue';
import VotingCard from '@/components/VotingCard.vue';
let communities=reactive([
    {
        name:"UniGov Security",
        desc:"Turvallisuuspalvelu"
    },
    {
        name:"OPP",
        desc:"Turvallisuuspalvelu"
    }
])
let votings=reactive([
    {
        name:"Testivoitto",
        desc:"Etsimme testivoittajaa",
        votes: [
            ["Testivoittaja", 100],
            ["Testihäviäjä", 0],
            ["Jotain siltä väliltä", 50],
            ["Jotain muuta", 27],
        ]
    },
    {
        name:"ÄÄÄÄÄÄÄÄnestys",
        desc:"Täytyy kyllä sanoa että on se äänestäminen vaan jännää",
        votes: [
            ["Näin on", 23],
            ["Älä ny hulluja puhu", 2]
        ]
    }
])
</script>

<template>
    <div class="ownCommunities">
        <h2>{{ translations.ownCommunities }}</h2>
        <div>
            <CommunityCard v-for="i in communities.length" :key="i" :data="communities[i-1]"/>
        </div>
    </div>
    <div class="ownVotings">
        <h2>{{ translations.ownVotings }}</h2>
        <div>
            <VotingCard v-for="i in votings.length" :key="i" :data="votings[i-1]" />
        </div>
    </div>
</template>

<style>
    h2 {
        text-align: center;
        margin-top: 20px;
    }
    .ownCommunities>div, .ownVotings>div {
        height: 200px;
        overflow-x: auto;
        display: flex;
        position: relative;
        
    }
    .ownCommunities>div>div, .ownVotings>div>div {
        flex-shrink: 0;
        margin: 10px;
        max-width: 90vw;
    }
    
    .ownVotings {
        height: 570px;
    }
    .ownVotings>div {
        height: 520px;
    }
    
</style>
