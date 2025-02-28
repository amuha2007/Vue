<script setup>
    import dataNews from '@/data/dataNews';
    console.log(dataNews);
    
    
    
        
    

</script>

<template>
    <div className="CompanyNewsHeader">
        <h3>Новости компании</h3>
        <a href="/Blog">Читать все</a>
    </div>
    <div className="CompanyNewsContent">
        <div className="CompanyNewsCards">
            
            <div v-for="(item,index) in dataNews" className="CompanyNewsCard">


                <div className="CompanyNewsCardContent" v-if="(index<=3)">
                    <h4 >{{ item.header }}</h4>
                    <p >{{ item.text }}</p>
                    <a >Подробнее</a>
                    
                </div>
                <div v-if="(index<=3 && item.img)">
                    <img  :src=item.img className="img" />
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<style>

.CompanyNewsCardContent{
    display: flex; 
    height: auto;
    min-width: 220px;
    border-radius: 15px;
    flex-direction: column;
    position: relative;

}
.CompanyNewsCardContent>h4, p {
    margin-left: 10px;
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
        flex-wrap: wrap-reverse;
        
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