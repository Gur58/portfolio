import artLight from '/public/image/art_light.png';
import artDark from '/public/image/art_dark.png';

function About() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between">
                <div className="font-montserrat-black lg:mr-10 text-gray-700 text-xl text-center xsm:text-3xl sm:text-4xl lg:text-3xl xl:text-5xl lg:text-left mb-10">
                    <div>Привет</div>
                    <div>Меня зовут Евгений</div>
                    <div>Я Frontend-разработчик</div>
                </div>
                <img src={artLight} alt="art" className="rounded-full w-96 border-solid border-8 border-[#15ccd5]"/>
            </div>
        </div>
    )
}

export default About;
