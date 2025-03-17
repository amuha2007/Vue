
<template>
  
    <header>
      <Navigation/>
    </header>

    <body>
      <RouterView></RouterView>
    </body>
    
    

    <footer>
      <FooterContainer/>
    </footer>
</template>


<style>
  
header{
  background: linear-gradient(180deg, #f3f3f3, #eaeaea);
}
  
</style>


<script>
import Navigation from './components/Navigation/Navigation.vue';
import FooterContainer from './components/Footer/FooterContainer.vue';
import MainPage from './components/MainPage/MainPage.vue';



export default{
  components:{Navigation, FooterContainer, MainPage},
  data(){
    return{

    }
  }
}
</script>