<script setup lang="ts">
//@ts-check
type VotingData = [string, number]
import { translations } from '@/translations/current';
const props = defineProps(["data"])
let totalVotes=0
for (let i = 0; i < props.data.votes.length; i++) {
    totalVotes+=props.data.votes[i][1]
}
let sortedVotes=props.data.votes.sort((a:VotingData,b:VotingData)=>b[1]-a[1])
</script>

<template>
    <div class="votingCard">
        <h2>{{ props.data.name }}</h2>
        <p>{{ props.data.desc }}</p>
        <div class="votes">
            <div v-for="i in sortedVotes.length" :style="{ width: `${50+sortedVotes[i-1][1]/totalVotes*50}%` }">
                <span>{{ sortedVotes[i-1][0] }}</span><span>{{ sortedVotes[i-1][1] }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .votingCard {
        background: var(--background2);
        border-radius: 10px;
        width: 350px;
        padding: 10px;
        box-sizing: border-box;
        height: 500px;
        display: inline-block;
        font-size: 13px;
    }
    .votes>div {
        display: block;
        position: relative;
        background-color: var(--background1);
        height:0;
        padding-left: 5px;
        margin: 30px 0;
        box-sizing: border-box;
        border-radius: 5px;
        isolation: isolate;
    }
    .votes>div::before {
        content: "";
        width: 100%;
        position: absolute;
        left:0;
        transform: skew(-20deg);
        background: inherit;
        top: -5px;
        height: 25px;
        z-index: -1;
    }
    .votes>div>span:nth-child(2) {
        position: absolute;
        right: 5px;
        text-align: right;
        
    }
    h2 {
        margin: 0;
    }

    .votes>div:nth-child(1) {
        background: var(--stripe1-darker);
    }
    .votes>div:nth-child(2) {
        background: var(--stripe2-darker);
    }
    .votes>div:nth-child(3) {
        background: var(--stripe3-darker);
    }
    .votes>div:nth-child(4) {
        background: var(--stripe4-darker);
    }
</style>
