<script>
import AllTovarData from './AllTovarData/AllTovarData';

export default {
        components:{},
        data(){
            return{
                AllTovars:AllTovarData,
                
            }
        },
        computed: {
            tovarsWithDiscount(){
                
            }
        }

        
    }

console.log(AllTovarData);



</script>

<template>
    
    <optgroup v-for="(tovars,index) in AllTovars ">
        
        <option v-for="{el,name, discount} in tovars">
            
                <p>{{ name }}</p>//<p>{{ discount }}</p>
                
        </option>
        
    </optgroup>

</template>

<style></style>