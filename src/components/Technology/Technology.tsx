import htmlLogo from '/public/tech/html.svg'
import cssLogo from '/public/tech/css.svg'
import jsLogo from '/public/tech/js.svg'
import ts from '/public/tech/ts.svg'
import reactLogo from '/public/tech/react.svg'
import reduxLogo from '/public/tech/redux.svg'
import sassLogo from '/public/tech/sass.svg'
import tailwindLogo from '/public/tech/tailwind.svg'
import materialLogo from '/public/tech/material.svg'
import gitLogo from '/public/tech/git.svg'
import jestLogo from '/public/tech/jest.svg'
import webpackLogo from '/public/tech/webpack.svg'

function Technology () {
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-montserrat-black text-lg text-gray-700 dark:text-[#CCCCCC] xsm:text-2xl sm:text-3xl lg:text-4xl mb-5">Технологии</h2>
            <h3 className="text-xs text-center xsm:text-base sm:text-xl lg:text-2xl mb-10">Часть технологий которые я использую в разработке</h3>
            <div className="w-full grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10 [&>*]:w-28">
                <img className="hover:scale-125 transition-transform duration-200" src={htmlLogo} alt="html"/>
                <img className="hover:scale-125 transition-transform duration-200" src={cssLogo} alt="css"/>
                <img className="hover:scale-125 transition-transform duration-200" src={jsLogo} alt="js"/>
                <img className="hover:scale-125 transition-transform duration-200" src={ts} alt="ts"/>
                <img className="hover:scale-125 transition-transform duration-200" src={reactLogo} alt="react"/>
                <img className="hover:scale-125 transition-transform duration-200" src={reduxLogo} alt="redux"/>
                <img className="hover:scale-125 transition-transform duration-200" src={sassLogo} alt="sass"/>
                <img className="hover:scale-125 transition-transform duration-200" src={tailwindLogo} alt="tailwind"/>
                <img className="hover:scale-125 transition-transform duration-200" src={materialLogo} alt="material"/>
                <img className="hover:scale-125 transition-transform duration-200" src={gitLogo} alt="git"/>
                <img className="hover:scale-125 transition-transform duration-200" src={jestLogo} alt="jest"/>
                <img className="hover:scale-125 transition-transform duration-200" src={webpackLogo} alt="webpack"/>
            </div>
        </div>
    )
}

export default Technology;
