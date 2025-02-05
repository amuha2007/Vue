
<template>
    <header>
      <Navigation/>
    </header>

    <div className="Container" style="width: 80%; margin-left: auto; margin-right: auto;">
        <MainPage/>
    </div>

    <footer>
      <FooterContainer/>
    </footer>
</template>


<style>
  #app{
    width: 80%;
    margin-right: auto;
    margin-left: auto;
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