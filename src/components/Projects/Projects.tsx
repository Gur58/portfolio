import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {Store} from "@/store";

export const projects = {
    ru: [
        {
            name: 'Система по обучению и инструктажу для сотрудников компании',
            stack: ['JS', 'JQuery', 'SharePoint']
        },
        {
            name: 'Дистанционное банковское обслуживание',
            stack: ['Typescript', 'React', 'Redux', 'Redux-Thunk', 'Redux-Form', 'Reselect', 'Jest']
        },
        {
            name: 'Личный кабинет сотрудника банка',
            stack: ['Typescript', 'Angular', 'RxJS', 'Jest']
        },
        {
            name: 'Интернет банк для корпоративных клиентов',
            stack: ['Typescript', 'React', 'Redux', 'Redux-Saga', 'Redux-Form', 'Reselect', 'Jest']
        },
        {
            name: 'Система автоматической поддержки и сопровождения разработки проектов',
            stack: ['Typescript', 'React', 'MOBX', 'Formik', 'Jest']
        },
        {
            name: 'Система контроля охранной деятельности',
            stack: ['Typescript', 'React', 'Redux', 'Redux toolkit', 'Formik', 'React-player', 'Jest']
        },
        {
            name: 'Приложение анонимного опроса сотрудников',
            stack: ['Typescript', 'React', 'MOBX', 'Formik', 'Jest']
        },
        {
            name: 'Интернет-банк СМБ',
            stack: ['Typescript', 'React', 'Formik', 'React-query', 'MicroFrontend Module-Federation', 'Jest']
        },
    ],
    en: [
        {
            name: 'Training and instruction system for company employees',
            stack: ['JS', 'JQuery', 'SharePoint']
        },
        {
            name: 'Remote banking',
            stack: ['Typescript', 'React', 'Redux', 'Redux-Thunk', 'Redux-Form', 'Reselect', 'Jest']
        },
        {
            name: 'Personal account of a bank employee',
            stack: ['Typescript', 'Angular', 'RxJS', 'Jest']
        },
        {
            name: 'Internet banking for corporate clients',
            stack: ['Typescript', 'React', 'Redux', 'Redux-Saga', 'Redux-Form', 'Reselect', 'Jest']
        },
        {
            name: 'Automatic support and support system for project development',
            stack: ['Typescript', 'React', 'MOBX', 'Formik', 'Jest']
        },
        {
            name: 'Система контроля охранной деятельности',
            stack: ['Typescript', 'React', 'Redux', 'Redux toolkit', 'Formik', 'React-player', 'Jest']
        },
        {
            name: 'Security activity control system',
            stack: ['Typescript', 'React', 'MOBX', 'Formik', 'Jest']
        },
        {
            name: 'Internet banking for medium and small businesses',
            stack: ['Typescript', 'React', 'Formik', 'React-query', 'MicroFrontend Module-Federation', 'Jest']
        },
    ],
}

function Projects() {
    const { t } = useTranslation();
    const { language: { value } } = useContext(Store);

    return (
        <div className="flex items-center flex-col">
            <div className="font-montserrat-black text-lg text-gray-700 dark:text-[#CCCCCC] xsm:text-2xl sm:text-3xl lg:text-4xl mb-10">{t('projects')}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {projects[value].map((item, index) => (
                    <div key={index} className="border-[#15ccd5] border-solid border-2 rounded-lg p-5 md:p-10 shadow-md">
                        <h3 className="font-montserrat-black text-gray-700 dark:text-[#CCCCCC] text-lg md:text-2xl mb-3">{item.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {item.stack.map((item, index) => (
                                <div key={index} className="bg-[#15ccd529] dark:bg-[#15ccd5b5] text-gray-700 dark:text-slate-950 text-xs md:text-sm px-3 rounded-xl">{item}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
