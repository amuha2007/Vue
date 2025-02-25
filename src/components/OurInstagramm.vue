<script setup>


const data={
            
            pictPeople:['../../public/img/InsagrammAvatars/1.jpg','../../public/img/InsagrammAvatars/2.jpg','../../public/img/InsagrammAvatars/3.jpg','../../public/img/InsagrammAvatars/4.jpg','../../public/img/InsagrammAvatars/5.jpg','../../public/img/InsagrammAvatars/6.jpg','../../public/img/InsagrammAvatars/7.jpg','../../public/img/InsagrammAvatars/8.jpg','../../public/img/InsagrammAvatars/9.jpg','../../public/img/InsagrammAvatars/10.jpg','../../public/img/InsagrammAvatars/11.jpg','../../public/img/InsagrammAvatars/12.jpg']
        }

console.log(data);
</script>

<template>
    <div className="WeInInstContainer">
        <div className="Header">
            <h3>Мы в Instagram</h3>
        </div>
        <div className="contantContainer">
            
                        
                        <img src="../../public/img/айфон 1.png" className="instPhone" id="Iph1">
                        <img src="../../public/img/айфон 2.png" className="instPhone" id="Iph2">
                        
            <div className="couruselButton"><img src="../../public/img/ArrowRightOrange.png"></div>
            <div className="instCourusel">
                <div className="instCouruselTop">
                    <div v-for="(img, index) in data.pictPeople" >
                        
                        <img v-if="index %2!==0"  :src="img" className="instPhoto">
                        
                    </div>
                </div>

                <div className="instCouruselBot">
                    <div v-for="(img, index) in data.pictPeople" >
                        
                        <img v-if="index %2==0"  :src="img" className="instPhoto" >
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>

.couruselButton{
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 43px;
    position: relative;
    left: 910px;
    top: 244px;
    cursor: pointer;
}

.contantContainer{
    position: relative;
}

.WeInInstContainer{
    width: 80%;
    margin-right: auto;
    margin-left: auto;
}

.instPhoto{
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 15px;
    /* position: relative;
    transition: 1s;
    right: 220px; */
}

.instCourusel{
    position: relative;
    left: 270px;
    width:auto;
    overflow: hidden;
}

.instCouruselTop{
    display: flex;
}

.instCouruselBot{
    display: flex;
}

.instPhone{
    width: 500px;
    position: absolute;

}
#Iph1{
    left: -90px;
    top: 50px;
}
#Iph2{
    left: -90px;
    top: 130px;
}
</style>