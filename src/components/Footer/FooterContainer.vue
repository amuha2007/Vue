<script>





    export default{
        
        methods:{
            scrollUp:()=>{
                window.scroll({
                    top: 'to',
                    left: 0,
                    behavior:'smooth'
                })
            }
            
        }
        
    }
</script>

<template>
        <div className="Footer">
            <h3 className="footerHeader">Подписка на новости и расслыку</h3>
            <p className="footerText">Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>
            <div class="subscribeInputContainer">
                <input type="text" className="subInput"/>
                <button className="subButton">Подписаться</button>
            </div>
            <div className="SubscribeRules">
                <p>Нажимая на кнопку "Подписаться", вы принимаете правила 
                    <a href="" className="SubscribeRulesA">пользовательского соглашения</a>
                </p>
            
            </div>
            
            <div className="FooterButtonsLogo">
                <img src="../../../public/img/Logo.png">
                <div className="footerButtons">
                    <p>Блог</p>
                    <p>Контакты</p>
                </div>
                <div className="ScrollUp" v-on:click="scrollUp">
                    <img src="../../../public/img/icons/arrowToTop.png">
                </div>
            </div>
            
        </div>
</template>

<style>

.FooterButtonsLogo>img{
    width: 150px;
}

.subscribeInputContainer{
    display: flex;
}
.subButton{
    color: white;
    background-color: #f9b300;
    border-radius: 20px;
    border: 0px;
    width: 120px;
    position: relative;
    right: 120px;
    font-family: Gilroy;
}
.subInput{
    padding: 10px;
    padding-left: 20px;
    width: 50%;
    border-radius: 20px;
    border: #000000 solid 0px;
    background-color: #F3F3F3;
    outline: 0;
}

.SubscribeRulesA {
    text-decoration: none;
    color: #f9b300;
}

.SubscribeRules{
    font-size: 11px;
    color: #979797;
}
.footerHeader{

    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
}

.footerText{
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    width: 50%;
}
.ScrollUp{
    cursor: pointer;
    
}


.Footer{
    text-align: start;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.FooterButtonsLogo{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around
}

.footerButtons{
    display: flex;
    
}
.footerButtons>p{
    margin-right: 10px;
    margin-left: 10px;
}
</style>