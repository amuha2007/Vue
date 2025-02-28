
<template>
  
    <header>
      <Navigation/>
    </header>

    <RouterView></RouterView>
    

    <footer>
      <FooterContainer/>
    </footer>
</template>


<style>
  

  
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