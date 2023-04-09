import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero pt-[20%]">
                    <h1 className="block  pl-3 pr-4 text text-gray-900 text-5xl font-semibold  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Первый
                        курс <br/>
                        по компьютерной сборке
                    </h1>
                    <div className="hero--block flex pt-[60px] ">
                        <div className="hero--block__one ">
                            <h5 className="block py-2 pl-[10px] pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">18</h5>
                            <p
                                className="block py-2 pl-[10px] pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Дней
                            </p>
                        </div>
                        <div className="hero--block__two pl-[30px]">
                            <h5 className="block py-2 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">18</h5>
                            <p className="block py-2   pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Часов</p>
                        </div>
                        <div className="hero--block__three pl-[30px]">
                            <h5 className="block py-2 pl-3 px-3 text-2xl pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">18</h5>
                            <p className="block py-2 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Минут</p>
                        </div>
                        <div className="hero--block__three pl-[30px]">
                            <h5 className="block py-2 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">18</h5>
                            <p className="block py-2 pl-3 px-5 text-2xl pr-4 text-gray rounded hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Секунд</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;