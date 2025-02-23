
<template>
    <div >
        <img src="../../../public/img/blot.png" id="blot">
        <img src="../../../public/img/coffee-breans&cup2.png" id="cup">
          <h2 className="Content h2 zind1" >Свежеобжаренный кофе</h2>
          <p className="Content zind1">Кофе Калининградской обжарки из разных стран
            произрастания с доставкой на дом.</p>
          <p className="Content zind1">Мы обжариваем кофе каждые выходные.</p>
          <CatalogsProd/>
          <Cardswithdiscont/>
          <MainPromo/>
          <Companynews/>
          <OurInstagramm/>
          
        </div>
</template>

<style>

.zind1{
    position: relative;
    z-index: 10;
}

#blot{
    position: absolute;
    top: 0px;
    max-height: 1100px;
    position: absolute;
    right: 0;
    z-index: 1;
}

.Content{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.h2{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    color: #000000;
}

#cup{
    position: relative;
    z-index: 2;
    left: 50%;
}
</style>

<script>

    import CatalogsProd from '../Catalogsprod.vue';
    import FooterContainer from '../Footer/FooterContainer.vue';
    import Navigation from '../Navigation/Navigation.vue';
    import Cardswithdiscont from '../Caruselcards.vue';
    import MainPromo from '../MainPromo.vue';
    import Companynews from '../Companynews.vue';
    import OurInstagramm from '../OurInstagramm.vue';
    import Blogpage from '../BlogPage/Blogpage.vue';

    export default{

    components:{Navigation,FooterContainer,CatalogsProd,Cardswithdiscont,MainPromo,Companynews,OurInstagramm,Blogpage},

    data(){
        return{

        }
    }
}
</script>