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
                    techDescription: 'Часть технологий которые я использую в разработке',
                    companyDescription: 'Крупные компании в которых я успел поработать',
                    projectDescription: 'Проекты в которых принимал участие'
                }
            },
            en: {
                translation: {
                    hello: 'Hello',
                    myName: 'My name is Evgenii',
                    iAm: 'I\'am a Frontend developer',
                    technology: 'Technology',
                    projects: 'Projects',
                    companies: 'Companies',
                    techDescription: 'Part of the technologies I use in development',
                    companyDescription: 'Big companies I have worked for',
                    projectDescription: 'Projects in which I took part'
                }
            }
        },
        lng: "ru",
        fallbackLng: ["en", "ru"],

        interpolation: {
            escapeValue: false
        }
    });
