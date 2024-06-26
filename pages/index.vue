<template>
    <main id="catalogue">
        <div class="left-side">
            <h1>Фильтр</h1>
            <div class="color filter">
                <label for="">Цвет</label>
                <div class="colors">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                </div>
            </div>
            <div class="room filter">
                <label for="">Комната</label>
                <div class="blocks">
                    <div class="item">
                        <p>Жилая комната</p>
                    </div>
                    <div class="item">
                        <p>Спальная комната</p>
                    </div>
                    <div class="item">
                        <p>Домашний офис</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                </div>
            </div>
            <div class="some filter">
                <label for="">Ассортимент</label>
                <div class="blocks">
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                    <div class="item">
                        <p>Гостиная комната</p>
                    </div>
                </div>
            </div>
            <div class="choose filter">
                <label for="">Подборка</label>
                <div class="choose-blocks">
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" @click="show()" alt="">
                        </div>
                        <span>
                            Индивидуалист
                        </span>
                    </div>
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            Престиж
                        </span>
                    </div>
                </div>
            </div>
            <div class="choose filter">
                <label for="">Высота(мм)</label>
                <div class="choose-blocks">
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            0-10
                        </span>
                    </div>
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            10-15
                        </span>
                    </div>
                </div>
            </div>
            <div class="choose filter">
                <label for="">Типы пряжи</label>
                <div class="choose-blocks">
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            Frise
                        </span>
                    </div>
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            Петлевый ворс
                        </span>
                    </div>
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            Саксония
                        </span>
                    </div>
                    <div class="select">
                        <div class="check-box">
                            <img src="~/assets/img/icons/check.svg" alt="">
                        </div>
                        <span>
                            Велюр
                        </span>
                    </div>
                </div>
            </div>
            <div class="choose filter">
                <label for="">Ширина(м)</label>
                <div class="choose-blocks">
                    <form action="">
                        <input type="number" placeholder="От">
                        <input type="number" placeholder="До">
                    </form>
                </div>
            </div>
            <button>
                <p>
                    Найти
                </p>
            </button>
        </div>
        <div class="right-side">
            <div class="bg-logo"></div>
            <div class="main-side">
                <div class="banner">
                    <h1 class="title">Создайте уют с нашими коврами</h1>
                    <p>Высокое качество по доступным ценам</p>
                    <ul>
                        <label for="">Ключевые преимущества:</label>
                        <ul>
                            <li>Новая коллекция 2024</li>
                            <li>Уникальные дизайны для любого интерьера</li>
                            <li>Гарантия возврата в течение 30 дней</li>
                        </ul>
                    </ul>
                    <button>Посмотреть коллекцию</button>
                </div>
                <div class="filter-block">
                    <div class="search-inp">
                        <img src="~/assets/img/icons/search.svg" alt="">
                        <input type="text" placeholder="Поиск" class="search">
                    </div>
                    <div class="filtr-inp">
                        <div class="show">
                            <p>Сортировать</p>
                            <img src="~/assets/img/icons/arrow.svg" alt="">
                        </div>
                        <div class="hidden">
                            <div class="item">lorem impsun</div>
                            <div class="item">lorem impsun</div>
                            <div class="item">lorem impsun</div>
                            <div class="item">lorem impsun</div>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="carpet" v-for="item of data" :key="item">
                        <div class="img">
                            <img src="~/assets/img/test.jpg" alt="">
                            <div class="top">
                                <div class="show">
                                    <img src="~/assets/img/icons/eye.svg" alt="">
                                </div>
                                <div class="star">
                                    <img src="~/assets/img/icons/star-white.svg" alt="">
                                </div>
                            </div>
                            <div class="bottom">
                                <p>{{ item.title}}</p>
                            </div>
                        </div>
                        <div class="discription">
                            <p>Доступные цвета</p>
                            <div class="colors">
                                <div class="item" v-for="color of item.colors > 6 ? 5 : item.colors" :key="color"></div>
                                <span v-if="item.colors > 6"> ... </span>
                            </div>
                            <div class="disc">
                                <div class="width">
                                    <p>Ширина</p>
                                    <span>4 метра</span>
                                </div>
                                <div class="height">
                                    <p>Общая высота</p>
                                    <span>7,8 мм</span>
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <Nuxt-link to="catalogue/id">
                                Подробная информация
                            </Nuxt-link>
                        </div>
                    </div>
                </div>
                <button @click="showMore()">Далее</button>
            </div>
        </div>
    </main>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const data = ref([
    {
        title: 'title1',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title2',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title3',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title4',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title5',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title6',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title7',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title8',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title9',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title10',
        colors: Math.random().toString().slice(2, 3)
    },
    {
        title: 'title11',
        colors: Math.random().toString().slice(2, 3)
    },
])

let fbData = ref(data)

let isShow = ref(6)

onMounted(() => {
    for(let item of data._rawValue){
        item.colors = +item.colors
    }
    console.log(data._rawValue);
    console.log(fbData._rawValue);
})

const showMore = () => {
    isShow = isShow + 6
}

useHead({
    title: 'Каталог',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
