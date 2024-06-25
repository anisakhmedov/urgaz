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
            <button>Найти</button>
        </div>
        <div class="right-side"></div>
    </main>
</template>


<script setup>
useHead({
    title: 'Каталог',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
