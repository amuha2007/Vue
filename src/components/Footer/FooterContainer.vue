<script>

    export default{
        
        
        
    }
</script>

<template>
        <div className="Footer">
            <div className="AdresContainer">
                <p className="topContent">Местоположение:</p>
                <p className="FooterAdres">г. Минск, ул. Багратиона 58 пом 23</p>
            </div>
            <div className="WorkTime">
                <p className="topContent">Время работы:</p>
                <p>Пн-пт: с 9:00 до 19:00</p>
                <p>Сб: с 10:00 до 16:00</p>
            </div>
            <div className="PhoneContainer">
                <p className="topContent">Контакты:</p>
                <p className="FooterPhone">+375445931552</p>
            </div>
                
        </div>
</template>

<style>

.Footer{
    display: flex;
    justify-content: space-around;
    background: linear-gradient(180deg, #f3f3f3, #eaeaea);

}

.FooterAdres{
    width: 150px;
    font-size: 15px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:inherit;
}
.FooterPhone{
    width: 150px;
    font-size: 15px;
    height: 30px;
    
    background-color:inherit;
}
</style>