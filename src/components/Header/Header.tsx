import LogoIcon from '@/assets/icons/logo.svg?react'
import SunIcon from '@/assets/icons/sun.svg?react'
import MoonIcon from '@/assets/icons/moon.svg?react'
import CompanyIcon from '@/assets/icons/company.svg?react'
import TechIcon from '@/assets/icons/tech.svg?react'
import ProjectsIcon from '@/assets/icons/projects.svg?react'
import LanguageIcon from '@/assets/icons/language.svg?react'
import {useContext} from "react";
import {Store} from "@/store";
import {useTranslation} from "react-i18next";

function Header() {
    const { t } = useTranslation();
    const { theme: { onChangeTheme, value:theme }, language: { value:language, onChangeLanguage } } = useContext(Store);

    const onClick = (id: string) => () => {
        const element = document.getElementById(id);
        if (!element) return;
        const y =  element.getBoundingClientRect().top + window.scrollY;
        window.scroll({ top: y - 64, behavior: "smooth" })
    }

    const ThemeIcon = theme === 'light' ? SunIcon : MoonIcon;

    return (
        <header className="sticky top-0 flex justify-between items-center py-[1rem] h-16 z-10 bg-white dark:bg-slate-950">
            <nav className="flex justify-start items-center">
                <button type="button" onClick={onClick('about')} className="mr-2 xsm:mr-5 md:mr-16 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded-full p-1.5">
                    <LogoIcon className="w-10 h-10 dark:text-[#b5b5b5] text-[#554949]" />
                </button>
                <button type="button" onClick={onClick('technology')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded">
                    <TechIcon className="w-6 h-6 lg:mr-2"/>
                    <span className="hidden lg:inline">{t('technology')}</span>
                </button>
                <button type="button" onClick={onClick('company')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded">
                    <CompanyIcon className="w-6 h-6 lg:mr-2"/>
                    <span className="hidden lg:inline">{t('companies')}</span>
                </button>
                <button type="button" onClick={onClick('projects')} className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded">
                    <ProjectsIcon className="w-6 h-6 lg:mr-2"/>
                    <span className="hidden lg:inline">{t('projects')}</span>
                </button>
            </nav>
            <div className="flex">
                <button type="button">
                    <ThemeIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded-full p-1"
                        onClick={onChangeTheme}
                    />
                </button>
                <button type="button" className="relative">
                    <span className="absolute top-[-7px] right-[-7px] text-[11px] font-bold">{language.toUpperCase()}</span>
                    <LanguageIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 dark:active:bg-gray-900 rounded-full p-1"
                        onClick={onChangeLanguage}
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;
