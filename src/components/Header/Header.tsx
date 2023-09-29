import SunIcon from '@/assets/icons/sun.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'
import CompanyIcon from '@/assets/icons/company.svg?react'
import TechIcon from '@/assets/icons/tech.svg?react'
import ContactIcon from '@/assets/icons/contact.svg?react'
import ProjectsIcon from '@/assets/icons/projects.svg?react'

function Header() {
    return (
        <div className="flex justify-between items-center py-[1rem] h-16 rounded-xl">
            <div className="flex justify-start items-center">
                <LogoIcon className="w-14 h-14 mr-5 md:mr-16 text-[#666] hover:cursor-pointer active:bg-gray-200 rounded-full p-1.5" />
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <TechIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden md:inline">Технологии</span>
                </div>
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <CompanyIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden md:inline">Компании</span>
                </div>
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <ProjectsIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden md:inline">Проекты</span>
                </div>
                <div className="flex mr-2 md:mr-5 font-bold hover:underline underline-offset-4 select-none items-center p-2 hover:cursor-pointer active:bg-gray-200 rounded">
                    <ContactIcon className="w-6 h-6 md:mr-2"/>
                    <span className="hidden md:inline">Контакты</span>
                </div>
            </div>
            <SunIcon className="w-8 h-8 hover:cursor-pointer active:bg-gray-200 rounded-full p-1" />
        </div>
    )
}

export default Header;
