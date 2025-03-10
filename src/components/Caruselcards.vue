<script setup>

import Card from './Card.vue';
import AllTovarData from '../data/AllTovarData/AllTovarData';
import { computed } from 'vue';


const itemsWithDiscount = computed(()=>{
    return Object.values(AllTovarData).flatMap(category => 
    category.filter(item => item.discount)
);

    
});


const itemsWithDiscountAll=itemsWithDiscount.value;
console.log(itemsWithDiscountAll);
const totalItems = computed(() => {
  return itemsWithDiscount.value.length; // Просто возвращаем длину массива
});



</script>

<template >
    <h3 className="container">Товары со скидкой</h3>
    <p className="container">Наша компания предлагает покупать товар со скидкой не только в дни распродаж
        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>
    <div className="CaruselContainer container" >
        <button className="buttonCorusel"><img src="../../public/img/ArrowLeft.png"></button>

        <div className="Corusel">
        <div v-for="(data) in itemsWithDiscountAll ">
        
            
        
            
                
                    <div>
                        <Card :data="data"/>
                    </div>
                    
    </div>
</div> 
        <button className="buttonCorusel"><img src="../../public/img/ArrowRight.png"></button>
    </div>
    <p style="text-align: center; cursor: pointer;position: relative; z-index: 1; width: fit-content;margin-left: auto;margin-right: auto;">смотреть все</p>
</template>

<style>
    .container{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .buttonCorusel{
        min-width: 50px;
    height: 50px;
    background-color: rgb(249, 179, 0);
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center center;
    border: none;
    cursor: pointer;
    }

    .CaruselContainer{
        display: flex ;
        align-items: center;
        position: relative;
        z-index: 1;
    }

    
    .Corusel{
        display: flex;
        
        overflow: hidden;
        padding-top: 24px;
    }
    .Corusel>div{
        display: inherit;
    }
    .Corusel>div>div{
        display: inherit;
    }
</style>