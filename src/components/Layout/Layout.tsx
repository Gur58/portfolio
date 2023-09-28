import React from "react";

type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}: LayoutProps){
    return (
        <div className="flex justify-center text-[#666] bg-white dark:bg-slate-950 h-screen">
            <div className="w-full max-w-[1300px] mx-5 md:mx-28 sm:pt-5">
                {children}
            </div>
        </div>

    )
}

export default Layout;
