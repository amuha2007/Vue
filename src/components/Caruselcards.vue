<script setup>

import Card from './Card.vue';
import AllTovarData from './AllTovarData/AllTovarData';




    function itemsWithDiscount(){
    const tovarsKeys=Object.keys(AllTovarData);
        const filtered=tovarsKeys.map((key)=>{
            // console.log(key);
            let TovarsDiscount = AllTovarData[key].filter((item)=>{return item.discount})
            
            return {key:key,tovars:TovarsDiscount}
        })
        // console.log(filtered);
        return filtered
}


</script>

<template>
    <h3>Товары со скидкой</h3>
    <p>Наша компания предлагает покупать товар со скидкой не только в дни распродаж
        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>
    <div className="CaruselContainer">
        <button><</button>
        <div v-for="(data, index) in itemsWithDiscount() ">
        
        <div v-if="(data.key === 'coffee')">
            
                <p v-for="(data2) in data.tovars">
                    

                    <Card :data="data2"/>
                </p>

                
                
        </div>

        <div v-else > 
            <p v-for="(data2) in data.tovars">
                
                
                <Card :data="data2"/>
            </p>
        </div>
    </div>
            
        <button>></button>
    </div>
    <p>смотреть все</p>
</template>

<style>

</style>