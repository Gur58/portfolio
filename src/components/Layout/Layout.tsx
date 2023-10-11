import React, {useContext} from "react";
import LogoIcon from '@/assets/icons/logo.svg?react'
import {Store} from "@/store";


type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}: LayoutProps){
    const { loading: { value } } = useContext(Store);

    return (
        <div className="flex justify-center dark:text-[#b5b5b5] text-[#554949] bg-white dark:bg-slate-950">
            <div className={`fixed flex items-center justify-center bg-white ${value ? 'inset-x-0 inset-y-0 z-20' : 'h-0 overflow-hidden'} dark:bg-slate-950`}>
                <LogoIcon className="animate-ping w-14 h-14 dark:text-[#b5b5b5] text-[#554949] hover:cursor-pointer active:bg-gray-200 rounded-full" />
            </div>
            <div className={`w-full max-w-[1300px] mx-5 md:mx-28`}>
                {children}
            </div>
        </div>

    )
}

export default Layout;
