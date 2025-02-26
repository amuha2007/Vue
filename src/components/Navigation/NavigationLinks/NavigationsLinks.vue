<script>
    export default{

    }
</script>

<template>
    <div className="Links">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="Blog">Блог</RouterLink>
        <p>Контакты</p>
    </div>
    
</template>

<style>
    .Links{
        display: flex;

    }

    .Links>p,a{
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
    
</style>