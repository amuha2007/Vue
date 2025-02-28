<script >
import dataNews from '@/data/dataNews';
import FAQ from './Components/FAQ.vue';




export default{
    components:{FAQ},
        methods:{

            nextNews(){
                this.datanewsCount=this.datanewsCount+3;
                
            },

        setBlogTopActiveTab(tab){
            this.activeTab=tab;
        },
        setBlogActiveTab(el){
            this.activeBotEl=el
        }
    },
    data(){
        return{
                datanewsCount:3,
                dataNews:dataNews,
                activeTab:'Обучение',
                activeBotEl:'Турка',
                questionsAndAnswers:[
                    {question:'quwst1',answer:'ans1'},
                    {question:'quwst2',answer:'ans2'},
                    {question:'quwst3',answer:'ans3'}
                ],
                BlogMenuItems:[
                    {
                        name:'Турка',
                        img:'../../../public/img/turka.png', 
                        header:'Как сварить кофе в турке:', 
                        text:'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития. Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.',
                        theme:[
                            {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:'../../../public/img/coffee/кофе в турке имг1.jpg'},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                            ]
                        },
                    {
                        name:'Френч-пресс',
                        img:'../../../public/img/teapot.png',
                        header:'Как сварить кофе в френч-прессе:',
                        text:'какой-то текст типа Френч-Пресс',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Мока',
                        img:'../../../public/img/coffeePot.png',
                        header:'Как сварить кофе в Моке:',
                        text:'какой-то текст типа Мока',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Эспрессо',
                        img:'../../../public/img/coffeeMachine.png',
                        header:'Как сварить Эспрессо:',
                        text:'какой-то текст типа Эспрессо',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Воронка',
                        img:'../../../public/img/Voronka.png',
                        header:'Как сварить кофе в Воронке:',
                        text:'какой-то текст типа Воронка',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Аэропресс',
                        img:'../../../public/img/press.png',
                        header:'Как сварить кофе в Аэропресс:',
                        text:'какой-то текст типа Аэропресс',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Чашка',
                        img:'../../../public/img/cupwithSmoke.png',
                        header:'Как сварить кофе в Чашке:',
                        text:'какой-то текст типа Чашка',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    },
                    {
                        name:'Автомат',
                        img:'../../../public/img/automat.png',
                        header:'Как сварить кофе в Автомате:',
                        text:'какой-то текст типа Автомат',
                        theme:[
                        {nameTheme:'Название темы 1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 2',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''},
                            {nameTheme:'Название темы 3',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum'
                                ,img:''}
                        ]
                    }
                ]
        }
        
    }


    
}




</script>


<template>
    <div class="BlogPage">
        <div className="BlogMenu">
            <div className="BlogMenuTop">
                <p @click="setBlogTopActiveTab('Обучение')" :class="{active: activeTab==='Обучение'}">Обучение</p>
                <p @click="setBlogTopActiveTab('Новости')" :class="{active: activeTab==='Новости'}">Новости</p>
                <p @click="setBlogTopActiveTab('Частые вопросы')" :class="{active: activeTab==='Частые вопросы'}">Частые вопросы</p>
            </div>
            <div className="BlogMenuBot">
                <p>Приготовление разными способами</p>

                <div className="blogMenuBotItems">
                    <div v-for="(el, index) in BlogMenuItems" :key="index" className="blogMenuBotItem"  @click="setBlogActiveTab(el.name)" :class="{active:activeBotEl===el.name }">
                        <p>{{ el.name }}</p>
                        <img :src= el.img ></img> 
                        
                    </div>
                </div>
            </div>

        </div>

        <div className="BlogWraperContent" v-for="(el,index) in BlogMenuItems">
            <div v-if="el.name==activeBotEl">
                <p>{{ el.header }}</p>
                <p> {{ el.text }}</p>
                <div v-for="(el,index) in el.theme">
                    <img :src= el.img className="blogContentImg">
                    <p>{{ el.nameTheme }}</p>
                    <p>{{ el.text }}</p>
                </div>
            </div>
            
        </div>

        <div class="BlogNews">
            
            <h3>Новости:</h3>
            <div className="containerForNews">
                <div v-for="(el,index) in dataNews" >
                    <div  v-if="(index<=datanewsCount)" className="BlogPageNewsCardContent">
                        <div v-if="index<=datanewsCount && el.img" style="display: flex;">
                            <img  :src=el.img  />
                        </div>
                        <div>
                            <h4 >{{ el.header }}</h4>
                            <p >{{ el.text }}</p>
                            <a >Подробнее</a>
                        </div>
                        
                    
                    </div>
                    
                </div>
            </div>
            <div className="BlogPageNewsButtonContainer">
                <button className="BlogPageNewsButton" @click="nextNews()">Показать еще</button>
            </div>
        </div>
            
    </div>
    
                            
            
    <FAQ/>
    
</template>









<style>


.BlogPageNewsButton{
    font-family: Gilroy;
    text-align: center;
    padding: 15px;
    background-color: #F6F6F6;
    border-radius: 15px;
    box-shadow: #000000 0px 5px 5px;
    margin-bottom: 15px;
    cursor: pointer;
    width: 100%;
    border: none;
    position: relative;
    z-index: 10;
}
.BlogPageNewsCardContent{
    display: flex;
    height: 250px;
    margin-bottom: 15px;
    border-radius: 15px;
    box-shadow: #484848 0px 0px 6px;
    position: relative;
    
}
.BlogPage{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

    .active{
        background-color: #FFF7E1 !important;
        border-radius: 5px;
        border: solid 1px #F9B300 !important;
        /* height: 30px;
        color: #F9B300;
        font-family: Gilroy;
        width: 100%;
        margin: 5px; */
    }
    .BlogMenu{
        display: flex;
        flex-direction: column;
    }
    .BlogMenuTop{
        display: flex;
        align-items: center;
        
        
    }
    .BlogMenuTop>p{
        background-color: #f8f8f8;
    border-radius: 5px;
    border: solid 1px #afafaf;
    height: 30px;
    color: #F9B300;
    font-family: Gilroy;
    text-align: center;
    width: 100%;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }

    .blogMenuBotItems{
        display: flex;
        justify-content: space-between;
    }
    .blogMenuBotItems>div{
        text-align: center;
    width: 120px;
    box-shadow: #b1b1b1 0px 0px 5px 1px;
    border-radius: 14px;
    margin: 5px;
    font-family: Gilroy;
    font-style: normal;
    background-color: white;
    font-size: 16px;
    cursor:pointer;
    }
    

    .blogMenuBotItem:hover{
        box-shadow: rgb(245 191 30) 0px 0px 8px;
    }

    .blogMenuBotItem_active{
        background-color: #f9b300;
    }

    .blogContentImg{
        display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    }

    .VectorContainer{
        position:relative;
        top: -300px;
    }
</style>