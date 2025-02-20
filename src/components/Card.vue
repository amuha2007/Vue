<script setup>


const props=defineProps({
        
        data:{}
    })

    //console.log(props);
    console.log(props.data)

    let dataStars=Number(props.data.stars);
    let CoffeeStrenght=Number(props.data.coffeeStrength)
    console.log(CoffeeStrenght);

</script>

<template>



    <div v-if="props.data.type=='coffee'" className='Card'>
        <div v-if="props.data.discount" className="procentsCircle">%</div>

        <div className="couruselItemsStars">

            <div v-for="(n, index) in 5" :key="index">
                
                <div v-if="n-1<dataStars">
                    <img src="../../public/img/StarGold.png">
                </div>
                <div v-else>
                    <img src="../../public/img/StarGrey.png">
                </div>
                </div>
                

        </div>

        <div className="CardParams">
            <div className="CoffeeStrenght">
                <div v-for="(n,index) in CoffeeStrenght" :key="index">
                    <img src="../../public/img/Corns.png">
                </div>
            </div>

            <div>
                <p>Кислинка</p>
                <div className="settingsCoffeeSourrness">
                    <div v-for="(n) in 10" >
                            <div v-if="n-1<props.data.sourrness" className="settingsCoffeeSourrnessPointActive">
                                
                            </div>
                            <div v-else className="settingsCoffeeSourrnessPoint"></div>
                    </div>
                </div>
                
            </div>

            <div>
                <p>Горчинка</p>
                <div className="settingsCoffeeSourrness">
                    <div v-for="(n) in 10" >
                            <div v-if="n-1<props.data.bitterness" className="settingsCoffeeSourrnessPointActive">
                                
                            </div>
                            <div v-else className="settingsCoffeeSourrnessPoint"></div>
                    </div>
                </div>
            </div>

            <div>
                <p>Насыщенность</p>
                <div className="settingsCoffeeSourrness">
                    <div v-for="(n) in 10" >
                            <div v-if="n-1<props.data.saturation" className="settingsCoffeeSourrnessPointActive">
                                
                            </div>
                            <div v-else className="settingsCoffeeSourrnessPoint"></div>
                    </div>
                </div>
            </div>

        </div>
        <p>{{ props.data.name }}</p>
        <p>{{ props.data.description }}</p>
        <!-- <div className="cardDivForImg">
            <img :src="props.data.img">
        </div> -->
        
    </div>


    <div v-else className="Card">
        <div v-if="props.data.discount" className="procentsCircle">%</div>

        <div className="couruselItemsStars">

            <div v-for="(n, index) in 5" :key="index">
                
                <div v-if="n-1<dataStars">
                    <img src="../../public/img/StarGold.png">
                </div>
                <div v-else>
                    <img src="../../public/img/StarGrey.png">
                </div>
                
            </div>
            
            
        </div>

        <div className="CardParams">

        </div>


        <p>{{ props.data.name }}</p>
        

        <div className="cardDivForImg">
            <!-- <img :src="props.data.img"> -->
        </div>

    </div>

</template>

<style>

    .Card{
        box-shadow: rgb(192, 192, 192) 0px 0px 8px;
        height: 400px;
        width: 230px !important;
        border-radius: 15px;
        margin-right: 11px;
        margin-left: 11px;
        text-align: center;
        vertical-align: middle;
        margin-bottom: 15px;
        background-color: white;
        display: inline-block;
        transition: all 0.5s ease-in-out;
        position: relative;
        min-width: 230px;
        max-width: 230px;
    }

        .procentsCircle {
        color: white;
        background-color: #f9b300;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-family: Gilroy;
        font-size: 28px;
        line-height: 50px;
        margin-left: auto;
        position: relative;
        top: -20px;
        z-index: 1;
        left: -146px;
    }

    .CardParams{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cardDivForImg{
        position: relative;
        width: 150px;
        
        top: -90px;
        display: flex;
        left: 35px;
        height: 215px;
        /* 30% */
    }

    .couruselItemsStars{
        display: flex;
    }

    .CoffeeStrenght{
        display: flex;
    }

    .settingsCoffeeSourrnessPoint{
        width: 7px;
    height: 7px;
    background-color: #f0f0f0;
    border-radius: 50%;
    margin: 1px;
    }

    .settingsCoffeeSourrnessPointActive{
        background-color: #f9b300;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin: 1px;
    }

    .settingsCoffeeSourrness{
        display: flex;
    }

</style>