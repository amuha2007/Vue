<script>

import Card from './Card.vue';

    export default {
        components:{Card},
        data(){
            return{

            }
        }
    }

</script>

<template>
    <h3>Товары со скидкой</h3>
    <p>Наша компания предлагает покупать товар со скидкой не только в дни распродаж
        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>
    <div className="CaruselContainer">
        <button><</button>
            <Card/>
        <button>></button>
    </div>
    <p>смотреть все</p>
</template>

<style>

</style>