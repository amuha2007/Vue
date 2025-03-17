<script setup>

let activLink=0;

const NavData=[
    {name:'Ремонт бензорезов',
        content:'Наша мастерская одна из не многих может выполнить качественный и недорогой ремонт бензореза. Для выполнения этой работы у нас имеются все необходимые навыки и практические умения, позволяющие оперативно находить неисправности и эффективно устранять их. За многолетний стаж работы было досконально изучено огромное количество моделей техники от различных производителей.',
    img:'../../../public/img/Benzorez.png'},
    {name:'Ремонт и техническое обслуживание аппаратов высокого давления и оборудования для клининга.', content:'контент1'},
    {name:'Ремонт и техническое обслуживание виброплит, промышленных генераторов, резчиков швов, МШМ, раздельщиков трещин, резчиков кровли, многодисковых резчиков, затирочных машин', content:'контент2'},
    {name:'Ремонт и техническое обслуживание электроинструмента: ушм, полировальных машин, дрелей, перфораторов, отбойных молотков, аккумуляторного оборудования и инструмента. ', content:'контент3'},
    {name:'Ремонт и обслуживание бытового и профессионального бензоинструмента: бензорезы, бензопилы, триммеры, газонокосилки, тоавокосилки, бензобуры, генераторы, мотопомпы.', content:'контент4'},
    

];

</script>

<template>
    <div className="Main">
        <div className="MainPromo">
            <img src="../../../public/img/PromoImg.png">
        </div>
        <div className="MainContent">
            
            <div className="MainNavigation">
            
            <div v-for="(data,index) in NavData" className="MainNavItem">
                <p>{{ data.name }}</p>
            </div>
        </div>
        <div className="MainText">
            
            <div v-for="(data,index) in NavData">
                <div v-if="index==activLink">
                    <p>{{ data.content }}</p>
                    <img :src="data.img">
                </div>
            </div>
        </div></div>
        

    </div>
</template>

<style>
.Main{
    width: 100%;
}

.MainNavItem{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 8px;
    
}

.MainNavItem>p{
    padding: 10px;
    background-color: white;
    margin: 0px;
    box-shadow: 0px 0px 6px black;
    border-radius: 10px;
    width: -webkit-fill-available;
}

.MainNavItem>p:hover{
    box-shadow: 0px 0px 6px #3a66a3;
}

.MainContent{
    margin-top: 10px;
}

.MainPromo{
    display: flex;
    justify-content: center;

}
.MainPromo>img{
    width: 95%;
    margin-top: 8px;
    border-radius: 10px;
}


.MainText{
    width: 65%;
}
.MainNavigation{
    margin-right: 10px;
    width: 35%;
    cursor: pointer;
}

.MainContent{
    width: 80%;
    
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

</style>