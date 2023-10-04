import SunIcon from '@/assets/icons/sun.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'
import CompanyIcon from '@/assets/icons/company.svg?react'
import TechIcon from '@/assets/icons/tech.svg?react'
import ProjectsIcon from '@/assets/icons/projects.svg?react'
import TelegramIcon from '@/assets/icons/telegram.svg?react'
import {useContext} from "react";
import {Store} from "@/App";

function Header() {
    const { theme: { onChangeTheme } } = useContext(Store);

    return (
        <div className="flex justify-between items-center py-[1rem] h-16 rounded-xl">
            <div className="flex justify-start items-center">
                <LogoIcon className="w-14 h-14 mr-5 md:mr-16 dark:text-[#b5b5b5] text-[#554949] hover:cursor-pointer active:bg-gray-200 rounded-full p-1.5" />
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <TechIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">Технологии</span>
                </div>
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <CompanyIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">Компании</span>
                </div>
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <ProjectsIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden lg:inline">Проекты</span>
                </div>
            </div>
            <div className="flex">
                <button type="button">
                    <TelegramIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 rounded-full p-1"
                        onClick={
                            () => window.open('https://t.me/gurbalagur')
                        }
                    />
                </button>
                <button type="button">
                    <SunIcon
                        className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 rounded-full p-1"
                        onClick={onChangeTheme}
                    />
                </button>
            </div>
        </div>
    )
}

export default Header;
