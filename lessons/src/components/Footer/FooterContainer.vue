<script>
    export default{

    }
</script>

<template>
        <div className="Footer">
            <h3>Подписка на новости и расслыку</h3>
            <p>Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>
            <div class="subscribeInputContainer">
                <input type="text"/>
            </div>
            <div className="FooterButtonsLogo">
                <p>Logo</p>
                <div className="footerButtons">
                    <p>Блог</p>
                    <p>Контакты</p>
                </div>
                <div className="ScrollUp">
                    scrollup
                </div>
            </div>
            
        </div>
</template>

<style>
.Footer{
    text-align: center;
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