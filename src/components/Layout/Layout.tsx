import React, {useContext} from "react";
import LogoIcon from '@/assets/icons/logo.svg?react'
import {Store} from "@/App";


type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}: LayoutProps){
    const { loading: { value } } = useContext(Store);

    return (
        <div className="flex justify-center dark:text-[#b5b5b5] text-[#554949] bg-white dark:bg-slate-950">
            <div className={`fixed flex items-center justify-center bg-white ${value ? 'inset-x-0 inset-y-0 z-10' : 'h-0 overflow-hidden'} dark:bg-slate-950`}>
                <LogoIcon className="animate-ping w-14 h-14 mr-5 md:mr-16 dark:text-[#b5b5b5] text-[#554949] hover:cursor-pointer active:bg-gray-200 rounded-full p-1.5" />
            </div>
            <div className={`${value ? 'h-0 overflow-hidden' : ''} w-full max-w-[1300px] mx-5 md:mx-28 sm:pt-5`}>
                {children}
            </div>
        </div>

    )
}

export default Layout;
