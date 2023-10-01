const companyList = [
    {
        name: 'ППО ЭВТ ИМ. В.А.РЕВУНОВА',
        position: 'Специалист отдела информационных технологий',
        description: 'Предприятие по производству бытовой техники',
        start: 'Декабрь 2016',
    },
    {
        name: 'Ренесанс Кредит',
        position: 'Frontend-разработчик',
        description: 'Один из лидирующих банков сектора потребительского кредитования в России',
        start: 'Июль 2019',
    },
    {
        name: 'Bell Integrator',
        position: 'Старший Frontend-разработчик',
        description: 'Крупный системный интегратор, предоставляющий технологические услуги и инновационные сервисы',
        start: 'Октябрь 2019',
    }
];

function Company() {
    return (
        <div className="flex items-center flex-col">
            <div className="font-montserrat-black text-lg text-gray-700 xsm:text-2xl sm:text-3xl lg:text-4xl mb-10">Компании</div>
            <ol className="relative border-l-8 border-[#15ccd5] dark:border-gray-700 mt-10">
                {companyList.map((item) => (
                    <li className="mb-10 ml-4">
                        <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5 -left-[14px] border border-[#15ccd5] border-4"/>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.start}</time>
                        <h3 className="font-montserrat-black  text-gray-700">{item.name}</h3>
                        <h4 className="font-semibold text-gray-700">{item.position}</h4>
                        <p className="mb-4 text-gray-500">{item.description}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Company;
