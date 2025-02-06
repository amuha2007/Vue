
<template>
    <div className="Content">
          <h2>Свежеобжаренный кофе</h2>
          <p>Кофе Калининградской обжарки из разных стран
            произрастания с доставкой на дом.</p>
          <p>Мы обжариваем кофе каждые выходные.</p>
          <CatalogsProd/>
          <Cardswithdiscont/>
          <MainPromo/>
          <Companynews/>
          <OurInstagramm/>
          <Blogpage/>
        </div>
</template>

<style>
.Content>h2{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    color: #000000;
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