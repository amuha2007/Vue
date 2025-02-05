<script>
    export default{

    }
</script>

<template>
        <h3>Каталоги нашей продукции</h3>
        <div className="Catalogs">
            <div className="CatalogItem">
                <p>Свежеобжаренный кофе</p>
            </div>
            <div className="CatalogItem">
                <p>Чай и кофейные напитки</p>
            </div>
            <div className="CatalogItem">
                <p>Здоровое питание</p>
            </div>
            <div className="CatalogItem">
                <p>Продукция для вендинга</p>
            </div>
        </div>
</template>

<style>
    .Catalogs{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
    }

    .CatalogItem{
        font-family: Gilroy;
    text-align: center;
    border-radius: 20px;
    margin: 10px;
    /* width: 250px; */
    height: 310px;
    max-height: 340px;
    background-color: white;
    box-shadow: rgb(192, 192, 192) 0px 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    }

    .CatalogItem:hover{
        box-shadow: rgb(245 191 30) 0px 0px 8px;
    }
</style>