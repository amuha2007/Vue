<script>
    export default{

    }
</script>

<template>
    <div className="PromoContainer">
        <img src="../../public/img/Vector.png" style="margin-bottom: -5px; width: 100%">
        <div className="PromoContainerTop">
            <div>
            <img src="../../public/img/CoffeeCornsWithCup2.png" ></img>
            <div >
                <h3 className="heading">Почему стоит работать
                    именно с нами?</h3>

                    <div className="containerSection">
                        <div className="containerImg">
                            <img src="../../public/img/cupIco.png"></img>
                        </div>
                        <div>
                            <p className="contHeader">Всегда свежая обжарка</p>
                            <p className="text">Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
                        </div>
                        
                    </div>
                    <div className="containerSection">
                        <div className="containerImg">
                            <img src="../../public/img/cupIco.png"></img>
                        </div>
                        <div>
                            <p className="contHeader">Всегда свежая обжарка</p>
                            <p className="text">Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
                        </div>
                        
                    </div>
                    <div className="containerSection">
                        <div className="containerImg">
                            <img src="../../public/img/cupIco.png"></img>
                        </div>
                        <div>
                            <p className="contHeader">Всегда свежая обжарка</p>
                            <p className="text">Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
                        </div>
                        
                    </div>
            </div>
        </div>
        </div>

        <div className='PrompContainerBot'>
            <h3>Как мы обжариваем наш кофе:</h3>
            <p>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.

                Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом. У нас свой подход к каждой партии зерна.


                Мы раскрываем вкус каждого сорта кофе.</p>
            <button>Перейти в каталог</button>
        </div>
    </div>
</template>

<style>

.PromoContainer{
    width:  100% ;
    margin-top: -150px;
    /* background-color: rgb(255, 247, 225); */
}

    .heading{
        margin-right: 0px;
        font-family: 'Ubuntu', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
    }

    .PromoContainerTop{
        
        display: flex;
        
        align-items: center;
        background-color: rgb(255, 247, 225);
    }
    .PromoContainerTop>div{
        display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    width: 80%;
    }
    .PromoContainerTop>div>img{
        width: 370px
    }

    .containerImg{
    background-color: rgb(249, 179, 0);
    width:  50px ;
    height:  50px ;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-top: 25px;
    }

    .containerImg>img{
        width: 25px;
        height: 25px;
    }

    .containerSection{
        display: -webkit-inline-box;
    }

    .contHeader{
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: bold;
    }

    
</style>
<!--     width: 370px; -->