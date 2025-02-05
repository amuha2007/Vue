<script>
import NavigationsLinks from './NavigationLinks/NavigationsLinks.vue';


    export default {
        components:{NavigationsLinks},

        methods:{
            searchOpen(event){
                
                console.log(event.target.parentElement);
                
                console.log(this.searchState);

                if(this.searchState===true){
                    this.searchState=false
                    event.target.parentElement.style='width:auto, transiction:1s';
                }else{
                    this.searchState=true
                    event.target.parentElement.style='width:220px; position:absolute;right: 235px;display:flex;justify-content: flex-end;border:1px solid green;'
                }
            }
        },


        data(){
            return{

                searchState:false,


            }
        }
        
    }

</script>

<template>
    <div className="Navigation">
            <div className="NavIco">
                <img src="../../../public/img/Logo.png" alt="">
            </div>

            <NavigationsLinks/>

            <div className="NavMenu">
                
                <div className="searchIcoCintainer">
                    
                    <img src='../../../public/img/SearchBlack.png' alt="" v-on:click="searchOpen">

                </div>
                <img src='../../../public/img/corzine.png' alt="">
                <img src='../../../public/img/people.png' alt="">
            </div>
    </div>
</template>

<style>
    .Navigation{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .NavMenu{
        display: flex;
        align-items: center;
    }
    .NavMenu>img{
        width: 20px;
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .searchIcoCintainer>img{
        width: 20px;
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 4px;
    }

    .NavIco>img{
        width: 200px;
        height: 100px;
        margin-right: 30px;
    }





</style>