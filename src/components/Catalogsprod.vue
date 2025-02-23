<script>
    export default{

    }
</script>

<template>
    <div className="CatalogsProd">
        <h3 className="content h3">Каталоги нашей продукции</h3>
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
    </div>
</template>

<style>

.CatalogsProd{
    position: relative;
    z-index: 1;
}
    .content{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .h3{
        font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    }

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

    #catalogItem0 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    #catalogItem1 {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    #catalogItem2 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    #catalogItem3 {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
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