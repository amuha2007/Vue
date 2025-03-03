<script setup>
import { ref } from 'vue';
import FAQ from '../../../data/FAQ';

const faqList = ref(FAQ.map(item => ({ ...item, state: false })));

const questionClick = (el) => {
    el.state = !el.state;
    
}
</script>

<template>
    <img src="../../../../public/img/Vector.png" style="width: -webkit-fill-available;position: relative;top: 15px;">
    <div class="FAQ">
        <img src="../../../../public/img/CoffeeCornsWithCup2.png" class='FAQimg' />
        <div class="FAQcontent">
            <div v-for="(el, index) in faqList" :key="index">
                <p class="FaqQuestion" @click="questionClick(el)">{{ el.question }}</p>
                <div v-if="el.state" class="FaqAnswer">{{ el.answer }}</div> 
                <!-- через v-if верхний сделать разные классы , где будет размер и транзишн -->
            </div>
        </div>
    </div>
    <img src="../../../../public/img/Vector.png" style="transform: rotate(180deg); width: -webkit-fill-available;">
</template>

<style>
.FaqAnswer{
        
        height: fit-content;
        transition: 1s;
        box-shadow: black 0px 1px 5px;
        border-radius: 10px;
        padding: 8px;
        margin-bottom: 5px;
        background-color: white;
    }
    .FaqQuestion{
        display: flex;
        height: fit-content;

    margin-left: 8px;
    margin-top: 10px;
    background-color: white;
    box-shadow: rgb(0, 0, 0) 1px 1px 4px;
    padding-left: 16px;
    padding-right: 5px;
    border-radius: 15px;
    }

    .FAQ{
        width: 100%;
        background-color: #FFF7E1;
        display: flex;
        
    }

    .FAQimg{
        position: relative;
        height: 50%;
        width: 50%;
        z-index: 3;
        left: 100px;
    }
    .FAQcontent{
        width: 50%;
        
        margin-left: auto;
        margin-right: 50px;
        position: relative;
        z-index: 10;
        cursor: pointer;
        
    }

    
</style>