export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    messages: {
        ru: {
            header: {
                main: 'Главная',
                company: 'О компании',
                catalogue: 'Каталог',
                contact: 'Контакты',
            },
            mainPage: {

            }
        },
        en: {
            welcome: 'Welcome'
        },
        uz: {
            welcome: 'Bienvenue'
        }
    }
}))