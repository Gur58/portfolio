import artLight from '/public/image/art_light.png';
import artDark from '/public/image/art_dark.png';
import {useContext} from "react";
import {ThemeContext} from "@/App";

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex flex-col">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between">
                <div className="font-montserrat-black lg:mr-10 text-gray-700 dark:text-[#CCCCCC] text-xl text-center xsm:text-3xl sm:text-4xl lg:text-3xl xl:text-5xl lg:text-left mb-10">
                    <div>Привет</div>
                    <div>Меня зовут Евгений</div>
                    <div>Я Frontend-разработчик</div>
                </div>
                <img src={theme === "light" ? artLight : artDark} alt="art" className="rounded-full bg-neutral-200 dark:bg-slate-900 w-96 border-solid border-8 border-[#15ccd5]"/>
            </div>
        </div>
    )
}

export default About;

