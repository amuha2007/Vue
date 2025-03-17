<script setup>
    let activLink=1;

    const NavData=[
        {name:'Ремонт и техническое обслуживание аппаратов высокого давления и оборудования для клининга.', content:'контент1'},
        {name:'Ремонт и техническое обслуживание виброплит, промышленных генераторов, резчиков швов, МШМ, раздельщиков трещин, резчиков кровли, многодисковых резчиков, затирочных машин', content:'контент2'},
        {name:'Ремонт и техническое обслуживание электроинструмента: ушм, полировальных машин, дрелей, перфораторов, отбойных молотков, аккумуляторного оборудования и инструмента. ', content:'контент3'},
        {name:'Ремонт и обслуживание бытового и профессионального бензоинструмента: бензорезы, бензопилы, триммеры, газонокосилки, тоавокосилки, бензобуры, генераторы, мотопомпы.', content:'контент4'},
        

    ];

</script>

<template>
    <div className="Navigation">
        <img className="NavImg" src="../../../public/img/prompTop.jpg">

        <div className="NavigationContent">
            
            <div className="NavigationLinks">
                <p v-for="(item,index) in NavData">{{ item.name }}</p>
                
            </div>
        </div>
        
        <div className="NavCompanys">
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
            <div className="NavCompanysImgContainer">
                <img src="../../../public/img/botPromoImgLogo1.png">
            </div>
        </div>

       
        
    </div>
</template>

<style>

    .NavImg{
        position: absolute;
    }
    .Navigation{
        margin: 0px;
    }
    .Navigation>img{
        width: 100%;
    }

    .NavCompanysImgContainer{
        border-radius: 15px;
        display: flex;
        justify-content: center;
    }

    .NavCompanysImgContainer:hover{
        box-shadow: 0px 0px 8px rgb(255, 3, 3);
    }

    .NavCompanysImgContainer>img{
        width: 80%;

    }

    .NavigationContent{
        
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        
        
        
    }
    .NavigationLinks{
        display: flex;
        width: 100%;
        flex-direction: column;
        width: fit-content;
    }

    .NavigationLinks>p{
        background-color: rgb(255, 255, 255);
        opacity: 0.85;
        padding: 15px;
        border-radius: 10px;
        margin: 8px;
        margin-bottom: 3px;
        cursor: pointer;
    }
    .NavigationLinks>p:hover{
        box-shadow: 0px 0px 8px rgb(255, 3, 3);
    }

    .NavCompanys{
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

</style>