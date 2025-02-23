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

<template >
    <h3 className="container">Товары со скидкой</h3>
    <p className="container">Наша компания предлагает покупать товар со скидкой не только в дни распродаж
        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>
    <div className="CaruselContainer container" >
        <button className="buttonCorusel"><img src="../../public/img/ArrowLeft.png"></button>

        <div className="Corusel">
        <div v-for="(data, index) in itemsWithDiscount() ">
        
        <div v-if="(data.key === 'coffee')">
            
                <div v-for="(data2) in data.tovars">
                    

                    <Card :data="data2"/>
                </div>

                
                
        </div>

        <div v-else > 
            <div v-for="(data2) in data.tovars">
                
                
                <Card :data="data2"/>
            </div>
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