import artLight from '/public/image/art_light.png';
import artDark from '/public/image/art_dark.png';
import {useContext, useEffect, useState} from "react";
import {Store} from "@/store";
import {useTranslation} from "react-i18next";

function About() {
    const { theme: { value } } = useContext(Store);
    const { t } = useTranslation();
    const [isLoading, setLoading]  = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [value]);

    return (
        <section id="about" className="flex flex-col">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between">
                <h1 className="font-montserrat-black lg:mr-10 text-gray-700 dark:text-[#CCCCCC] text-xl text-center xsm:text-3xl sm:text-4xl lg:text-3xl xl:text-5xl lg:text-left mb-10">
                    <p>{t('hello')}</p>
                    <p>{t('myName')}</p>
                    <p>{t('iAm')}</p>
                </h1>
                <img onLoad={() => setLoading(false)} src={value === "light" ? artLight : artDark} alt="art" className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity rounded-full bg-neutral-200 dark:bg-slate-900 w-96 border-solid border-8 border-[#15ccd5]`}/>
            </div>
        </section>
    )
}

export default About;

