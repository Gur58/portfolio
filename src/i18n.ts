import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
                    hello: 'Привет',
                    myName: 'Меня зовут Евгений',
                    iAm: 'Я Frontend-разработчик',
                    technology: 'Технологии',
                    projects: 'Проекты',
                    companies: 'Компании',
                    techDescription: 'Часть технологий которые я использую в разработке'
                }
            },
            en: {
                translation: {
                    hello: 'Hello',
                    myName: 'My name is Evgenii',
                    iAm: 'I\'am a Frontend-developer',
                    technology: 'Technology',
                    projects: 'Projects',
                    companies: 'Сompanies',
                    techDescription: 'Part of the technologies I use in development'
                }
            }
        },
        lng: "ru",
        fallbackLng: ["en", "ru"],

        interpolation: {
            escapeValue: false
        }
    });
