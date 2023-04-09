import React from 'react';
import col from './../../assets/img/col.svg'
import usb from './../../assets/img/usb.svg'
import flesh from './../../assets/img/flesh.svg'

const Prof = ({dark}) => {
    return (
        <section style={{background: dark ? "#fff" : "black",}} id="prof">
            <div className="container">
                <div className="prof">
                    <h1 className="text-white text-center text-4xl text-white pt-[10%] pl-[30px]">
                        Получите профессию прямо сейчас
                    </h1>
                    <div className="flex pt-[10%] justify-around">
                        <img src={col} alt="img"/>
                        <img src={usb} alt="img"/>
                        <img src={flesh} alt="img"/>
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <h4 className="text-white pt-[40px] text-center">Только практические <br/>
                                навыки в работе
                            </h4>
                            <p className="text-gray-300 text-white pt-[50px] pl-[30px]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Netus eget velit quisque accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-white text-center pt-[40px] ">Работа на самом <br/>
                                современном оборудовании
                            </h4>
                            <p className="text-gray-300 text-white pt-[40px]  pl-[30px]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Netus eget velit quisque accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-white text-center pt-[10px]">Сертификация <br/>
                                по окончании обучения
                            </h4>
                            <p className="text-gray-300 text-white pt-[50px] pl-[30px]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Netus eget velit quisque accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prof;