import SunIcon from '@/assets/icons/sun.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'

function Header() {
    return (
        <div className="flex justify-between items-center py-[1rem] h-16 dark:bg-slate-900 rounded-xl">
            <div className="flex justify-start items-center">
                <LogoIcon className="w-14 h-14 mr-16 text-[#666] hover:cursor-pointer active:bg-gray-200 rounded-full p-1.5" />
                <span className="mr-5 font-bold hidden hover:underline underline-offset-4 select-none sm:block p-2 hover:cursor-pointer active:bg-gray-200 rounded">Технологии</span>
                <span className="mr-5 font-bold hidden hover:underline underline-offset-4 select-none sm:block p-2 hover:cursor-pointer active:bg-gray-200 rounded">Опыт</span>
                <span className="mr-5 font-bold hidden hover:underline underline-offset-4 select-none sm:block p-2 hover:cursor-pointer active:bg-gray-200 rounded">Контакты</span>
            </div>
            <SunIcon className="w-8 h-8 hover:cursor-pointer active:bg-gray-200 rounded-full p-1" />
        </div>
    )
}

export default Header;
