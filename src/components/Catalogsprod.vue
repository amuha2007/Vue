<script>
    export default{

    }
</script>

<template>
        <h3>Каталоги нашей продукции</h3>
        <div className="Catalogs">
            <div className="CatalogItem" id="catalogItem0">
                <p>Свежеобжаренный кофе</p>
                <div className="catalogItemForimg">
                    <img src="../../public/img/freshCoffeCatalog.png">
                </div>
                
            </div>
            <div className="CatalogItem" id="catalogItem1">
                <p>Чай и кофейные напитки</p>
                <div className="catalogItemForimg">
                    <img src="../../public/img/teaAndCoffeeCatalog.png">
                </div>
                
            </div>
            <div className="CatalogItem" id="catalogItem2">
                <p>Здоровое питание</p>
                <div className="catalogItemForimg">
                    <img src="../../public/img/HealthuFood.png">
                </div>
                
            </div>
            <div className="CatalogItem" id="catalogItem3">
                <p>Продукция для вендинга</p>
                <div className="catalogItemForimg">
                    <img src="../../public/img/VendingProductCatalog.png">
                </div>
                
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

    .catalogItemForimg{
        height: 80%;
    display: flex
;
    justify-content: center;
    min-width: 350px;
    }
</style>