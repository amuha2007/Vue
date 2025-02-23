<script setup>


const props=defineProps({
        
        data:{}
    })

    

    let dataStars=Number(props.data.stars);
    let CoffeeStrenght=Number(props.data.coffeeStrength)
    

</script>

<template>



    <div v-if="props.data.type=='coffee'" className='Card'>
        <div v-if="props.data.discount" className="procentsCircle">%</div>

        <div className="ItemsStars">

            <div v-for="(n, index) in 5" :key="index">
                
                <div v-if="n-1<dataStars">
                    <img src="../../public/img/StarGold.png" id="itemStar">
                </div>
                <div v-else>
                    <img src="../../public/img/StarGrey.png" id="itemStar">
                </div>
                </div>
                

        </div>

        <div className="CardParams">

            <div className="cardDivForImg">
            <img :src="props.data.img">
        </div>

            <div>
            <div className="CoffeeStrenght">
                <div v-for="(n,index) in CoffeeStrenght" :key="index">
                    <img src="../../public/img/Corns.png">
                </div>
            </div>

            <div className="Params">
                <p>Кислинка</p>
                <div className="settingsCoffeeSourrness">
                    <div v-for="(n) in 10" >
                            <div v-if="n-1<props.data.sourrness" className="settingsCoffeeSourrnessPointActive">
                                
                            </div>
                            <div v-else className="settingsCoffeeSourrnessPoint"></div>
                    </div>
                </div>
                
            </div>

            <div className="Params">
                <p>Горчинка</p>
                <div className="settingsCoffeeSourrness">
                    <div v-for="(n) in 10" >
                            <div v-if="n-1<props.data.bitterness" className="settingsCoffeeSourrnessPointActive">
                                
                            </div>
                            <div v-else className="settingsCoffeeSourrnessPoint"></div>
                    </div>
                </div>
            </div>

            <div className="Params">
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
        </div>

        <p className="cardName">{{ props.data.name }}</p>
        <p className="cardDescription">{{ props.data.description }}</p>

        <div className="CardPrice">
            <div className="PriceContainer">
                <p className="newPrice">{{ props.data.price }}</p>
                <p className="oldPrice">{{ props.data.oldprice }}</p>
            </div>
            <button className="cardButton">В корзину</button>
        </div>
        
        
    </div>


    <div v-else className="Card">
        <div v-if="props.data.discount" className="procentsCircle">%</div>

        <div className="ItemsStars">

            <div v-for="(n, index) in 5" :key="index">
                
                <div v-if="n-1<dataStars" >
                    <img src="../../public/img/StarGold.png" id="itemStar">
                </div>
                <div v-else>
                    <img src="../../public/img/StarGrey.png" id="itemStar">
                </div>
                
            </div>
            
            
        </div>



        <p>{{ props.data.name }}</p>
        

        <div className="cardDivForImg">
            <img :src="props.data.img">
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
        /* transition: all 0.5s ease-in-out; */
        position: relative;
        min-width: 230px;
        max-width: 230px;
    }

    .Card:hover{
        box-shadow: #f9b300 0px 0px 8px;
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
        cursor: pointer;
    }

    .CardParams{
        display: flex;
        position: relative;
        top: -22px;
        left: 5px;
        align-items: center;
        width: fit-content;

    }

    .cardDivForImg{
        
        display: flex;
        
        height: 215px;
        /* 30% */
    }

    .ItemsStars{
        display: flex;
        position: relative;
    left: 120px;
    top: -40px;
    width: fit-content;
    }

    #itemStar{
        width:18px;
    }

    .CoffeeStrenght{
        display: flex;
        justify-content: center;
    }

    .CoffeeStrenght>div>img{
        width: 15px;
        height: 15px;
        padding: 2px;
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

    .Params{
        font-size: 12px;
        
    }

    .Params>p{
        margin-top: 10px;
        margin-bottom: 0px;
    }

    .CardPrice{
        display: flex;
        align-items: center;
        position: relative;
        top: -8px;
    }

    .PriceContainer>p{
        margin: 0px;
    }

    .cardButton{
        width: 130px;
    background-color: rgb(249, 179, 0);
    height: 35px;
    color: rgb(240, 240, 240);
    font-family: Gilroy;
    border-radius: 8px;
    border-style: none;
    }

    .cardButton:hover{
        color: black;
    }

    .oldPrice{
        color: rgb(212, 208, 208);
    font-size: 20px;
    font-family: Gilroy;
    }

    .newPrice{
        width: 77px;
    color: rgb(0, 0, 0);
    font-family: Gilroy;
    font-size: 22px;
    font-weight: bolder;
    }

    .cardName{
        margin-top: 0px;
        position: relative;
        top: -15px;
    }

    .cardDescription{
        margin-left: auto;
        margin-right: auto;
        font-family: Gilroy;
    font-size: 13px;
    text-align: start;
    width: 90%;
    font-weight: 200;
    white-space: pre-wrap;
    position: relative;
        top: -15px;
        margin-bottom: 0px;
    }

</style>