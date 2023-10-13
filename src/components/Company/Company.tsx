import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {Store} from "@/store";
import {companyList} from "@/components/Company/companyList";



function Company() {
    const { t } = useTranslation();
    const { language: { value } } = useContext(Store);
    return (
        <section id="company" className="flex items-center flex-col">
            <h2 className="font-montserrat-black text-lg text-gray-700 dark:text-[#CCCCCC] xsm:text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-5">{t('companies')}</h2>
            <h3 className="text-xs text-center xsm:text-base sm:text-xl lg:text-2xl mb-5 sm:mb-10">{t('companyDescription')}</h3>
            <ol className="relative border-l-8 border-[#15ccd5]">
                {companyList[value].map((item, index) => (
                    <li key={index} className="mb-10 ml-4">
                        <div className="absolute w-5 h-5 bg-white dark:bg-slate-950 rounded-full mt-1.5 -left-[14px] border border-[#15ccd5] border-4"/>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.start}</time>
                        <h3 className="font-montserrat-black  text-gray-700 dark:text-[#CCCCCC]">{item.name}</h3>
                        <h4 className="font-semibold text-gray-700 dark:text-[#CCCCCC]">{item.position}</h4>
                        <p className="mb-4 text-gray-500 dark:text-[#999999]">{item.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Company;
