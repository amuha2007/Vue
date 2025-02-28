<script>
import FAQ from '../../../data/FAQ'
export default{
  components:{},
  methods:{

    questionClick(event){
        console.log(event);
    }

  },
  data(){
    
    
    return{
       

    state:true,
    faq:FAQ    
        
    }

    
  }
}
</script>



<template>
    <img src="../../../../public/img/Vector.png" style="width: -webkit-fill-available;position: relative;top: 15px;">
    <div className="FAQ">
            
            <img src="../../../../public/img/CoffeeCornsWithCup2.png" className='FAQimg'/>
            <div className="FAQcontent">
                <div v-for="(el,index) in faq">
                    
                    <p className="FaqQuestion" v-on:click="questionClick(event)">{{ el.question }}</p>
                    <div className="FaqAnswer">{{ el.answer }}</div>
                </div>
            </div>
            
    </div>
    <img src="../../../../public/img/Vector.png" style="transform: rotate(180deg); width: -webkit-fill-available;">
</template>

<style>

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
        
    }

    .FaqAnswer{
        transition: 1s;
        height: fit-content;
    transition: 1s;
    box-shadow: black 0px 1px 5px;
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 5px;
    background-color: white;
    }
</style>