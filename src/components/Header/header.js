import React, {useEffect, useState} from 'react';
import logo from './../../assets/img/logo.svg'

const Header = ({getDark, dark}) => {
    const [scroll, setScroll] = useState(0)


    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])

    return (
        <header style={{
            background: scroll > 50 ? '#5FB848' : '',
        }} id="container">
            <div className="container">
                <div className="header">

                    <nav
                        className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <img src={logo} className="h-8 mr-3"
                                     alt="img"/>
                            </a>
                            <div className="flex md:order-2">
                                <button onClick={() => getDark(!dark)}
                                        style={{
                                            background: dark ? 'gray' : '',
                                            color: dark ? 'white' : '',
                                            outline: dark ? 'none' : 'none'
                                        }}
                                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Зайти в кабинет
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                 id="navbar-sticky">
                                <ul style={{
                                    background: "transparent"
                                }}
                                    className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  md:dark:bg-gray-900 dark:border-gray-700">
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                       aria-current="page">Главная</a>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Курсы</a>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Расписание
                                    </a>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Преподаватели
                                    </a>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Рассылка
                                    </a>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Контакты
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </header>
    );
};

export default Header;