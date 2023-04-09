import React from 'react';
import logoTwo from "./../../assets/img/logoTwo.svg"

const Start = ({dark}) => {
    return (
        <section style={{background: dark ? "#fff" : "black",}} id=" start">
            <div className="container">
                <div className="pt-[10%] start">
                    <div className="flex items-center">
                        <img src={logoTwo} alt="img"/>
                        <h1 className="text-3xl pl-7 font-medium text-white">Быстрый старт</h1>
                    </div>
                    <p className="text-gray-600 text-white pt-[30px]">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
                </div>
                <div className="flex pt-[60px] justify-around items-start">
                    <span className="text-white text-2xl">100%</span>
                    <span className="text-white text-2xl">75%</span>
                    <span className="text-white text-2xl">50%</span>
                    <span className="text-white text-2xl">Итог</span>
                </div>

                <div className="flex">
                    <div className="w-[20%] h-{50px]"></div>
                </div>


                <div className="flex">
                    <span className="text-gray-600 text-white pt-[50px] pl-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                    <span className="text-gray-600 text-white pt-[50px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                    <span className="text-gray-600 text-white pt-[50px] pl-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</span>
                </div>
            </div>
        </section>
    );
};

export default Start;