import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {Store} from "@/store";
import {projectList} from "@/components/Projects/projectsList";


function Projects() {
    const { t } = useTranslation();
    const { language: { value } } = useContext(Store);

    return (
        <section id="projects" className="flex items-center flex-col">
            <h2 className="font-montserrat-black text-lg text-gray-700 dark:text-[#CCCCCC] xsm:text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-5">{t('projects')}</h2>
            <h3 className="text-xs text-center xsm:text-base sm:text-xl lg:text-2xl mb-5 sm:mb-10">{t('projectDescription')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {projectList[value].map((item, index) => (
                    <div key={index} className="border-[#15ccd5] border-solid border-2 rounded-lg p-5 md:p-10 shadow-md">
                        <h4 className="font-montserrat-black text-gray-700 dark:text-[#CCCCCC] text-lg md:text-2xl mb-3">{item.name}</h4>
                        <div className="flex flex-wrap gap-2">
                            {item.stack.map((item, index) => (
                                <span key={index} className="bg-[#15ccd529] dark:bg-[#15ccd5b5] text-gray-700 dark:text-slate-950 text-xs md:text-sm px-3 rounded-xl">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;
