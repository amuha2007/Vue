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
    <div className="Main">
        <div className="MainNavigation">
            Nav
            <div v-for="(data,index) in NavData">
                <p>{{ data.name }}</p>
            </div>
        </div>
        <div className="MainContent">
            MainContent
            <div v-for="(data,index) in NavData">
                <div v-if="index==activLink">{{ data.content }}</div>
            </div>
        </div>

    </div>
</template>

<style>
.Main{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    
}

.MainNavigation{
    width: 35%;
    border: solid 1px black;
}

.MainContent{
    width: 65%;
    border: solid 1px black;
}

</style>