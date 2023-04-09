import React from 'react';
import wd from './../../assets/img/wd.png'
const Div = ({getDark, dark}) => {
    return (
        <section style={{background: dark ? "#fff" : "black", padding: "30px 0"}} id="div bg-black pt-[20%]">
            <div className="container">
                <div className="div flex items-center">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Заказать курс
                    </button>
                    <div className="">
                        <div className="flex">
                            <p style={{padding: "0 0"}} className="block py-2 pl-[10px] pr-[10px]  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Учеников всего:</p>
                            <span style={{padding: "0 10px"}}  className="block py-2 pl-[10px] pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">200</span>
                            <p  className="block py-2 pl-[10px] pr-4 dark:text-gray-600 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Заработано учениками:</p>
                            <span style={{padding: "0 10px"}} className="block py-2 pl-[10px] pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">400 000₽</span>
                        </div>
                        <div className="flex ">
                            <p  className="block py-2 pl-[10px] pr-4 dark:text-gray-600  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Успешно закончили курс:</p>
                            <span style={{padding: "0 10px"}} className="block py-2 pl-[10px] pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">190</span>
                            <img src={wd}  alt="img" className="w-[50%] h-[10px]"/>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
};

export default Div;