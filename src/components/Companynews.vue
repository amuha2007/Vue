<script setup>
    

    
            let news=[
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',
                img:'../../public/img/NewsCompanyImg.png'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',
                img:'../../public/img/NewsCompanyImg.png'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',
                img:'../../public/img/NewsCompanyImg.png'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.'},
                {header:'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
                img:'../../public/img/NewsCompanyImg.png',
                text:'Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.'},
            ]   
        
    
</script>

<template>
    <div className="CompanyNewsHeader">
        <h3>Новости компании</h3>
        <a>Читать все</a>
    </div>
    <div className="CompanyNewsContent">
        <div className="CompanyNewsCards">
            
            <div v-for="(item,index) in news" className="CompanyNewsCard">


                <div className="CompanyNewsCardContent" v-if="(index<=3)">
                    <h4 >{{ item.header }}</h4>
                    <p >{{ item.text }}</p>
                    <a >Подробнее</a>
                    
                </div>
                <div v-if="index<=3 && item.img">
                    <img  :src=item.img className="img" >
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<style>

.CompanyNewsCardContent{
    padding: 10px;
    min-width: 200px;
}

    .CompanyNewsContent{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        
    }

    .CompanyNewsHeader{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }

    .CompanyNewsCards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        
    }

    .CompanyNewsCard{
        width: min-content;
        
        box-shadow: 0px 0px 10px rgb(172, 170, 170);
        display: flex;
        flex-direction: row-reverse;
        max-height: 300px;
        border-radius: 20px;
        margin:12px;
    }

    .img{
        width: 240px;
    height: 300px;
    }
</style>