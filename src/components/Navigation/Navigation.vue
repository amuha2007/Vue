<script setup>
    

</script>

<template>
    <div className="Navigation">
        <div className="NavigationTop">
            <div className="LogoContainer">
                <img className="Logo" src="../../../public/img/Logo.png">
            </div>
            <div className="NavPhoneAdres">
                <p className="Adres">г. Минск, ул. Багратиона 58 пом 23</p>
                <p className="Phone">+375445931552</p>
            </div>
        </div>

        
        
    </div>
</template>

<style>
    .Logo{
        width: 200px;
        margin-top: 5px;
    }

    .NavigationTop{
        display: flex;
        align-items: center;
    }
    .NavPhoneAdres{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    }

    .Phone{
        width: 150px;
        font-size: 15px;
        padding: 10px;
        border-radius: 5px;
        background-color: #e4e4e4;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Adres{
        width: 150px;
        font-size: 14px;
        margin-right: 15px;
        padding: 10px;
        border-radius: 5px;
        background-color:  #e4e4e4;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .NavImg{
        position: absolute;
    }
    .Navigation{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .Navigation>img{
        width: 100%;
    }

    .NavCompanysImgContainer{
        border-radius: 15px;
        display: flex;
        justify-content: center;
    }

    .NavCompanysImgContainer:hover{
        box-shadow: 0px 0px 8px rgb(255, 3, 3);
    }

    .NavCompanysImgContainer>img{
        width: 80%;

    }

    .NavigationContent{
        
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        
        
        
    }
    .NavigationLinks{
        display: flex;
        width: 100%;
        flex-direction: column;
        width: fit-content;
    }

    .NavigationLinks>p{
        background-color: rgb(255, 255, 255);
        opacity: 0.85;
        padding: 15px;
        border-radius: 10px;
        
        margin-bottom: 3px;
        cursor: pointer;
    }
    .NavigationLinks>p:hover{
        box-shadow: 0px 0px 8px rgb(255, 3, 3);
    }

    .NavCompanys{
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

</style>