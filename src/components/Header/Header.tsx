import SunIcon from '@/assets/icons/sun.svg?react'
import CompanyIcon from '@/assets/icons/company.svg?react'
import TechIcon from '@/assets/icons/tech.svg?react'
import ProjectsIcon from '@/assets/icons/projects.svg?react'
import LanguageIcon from '@/assets/icons/language.svg?react'
import {useContext} from "react";
import {Store} from "@/store";
import {useTranslation} from "react-i18next";

function Header() {
    const { t } = useTranslation();
    const { theme: { onChangeTheme }, language: { value, onChangeLanguage } } = useContext(Store);

    const onClick = (id: string) => () => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex justify-between items-center py-[1rem] h-16 rounded-xl">
            <div className="flex justify-start items-center">
                <button type="button" onClick={onClick('technology')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <TechIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">{t('technology')}</span>
                </button>
                <button type="button" onClick={onClick('company')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <CompanyIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">{t('companies')}</span>
                </button>
                <button type="button" onClick={onClick('projects')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <ProjectsIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">{t('projects')}</span>
                </button>
            </div>
            <div className="flex">
                <button type="button">
                    <SunIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 rounded-full p-1"
                        onClick={onChangeTheme}
                    />
                </button>
                <button type="button" className="relative">
                    <span className="absolute top-[-7px] right-[-7px] text-[11px] font-bold">{value.toUpperCase()}</span>
                    <LanguageIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 rounded-full p-1"
                        onClick={onChangeLanguage}
                    />
                </button>
            </div>
        </div>
    )
}

export default Header;
