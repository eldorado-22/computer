import React from 'react';
import comp from "./../../assets/img/compTwo.png"
const Comp = ({dark}) => {
    return (
        <section style={{background: dark ? "#fff" : "black",}} id="comp ">
            <div className="container">
                <div className="comp flex item justify-between pt-[10%]">
                    <img src={comp} alt="img"/>
                    <div className=" ">
                        <h1 className="text-4xl font-medium pl-16 pt-10 text-white">Чем мы занимаемся?</h1>
                        <p className=" text-white  pl-16 pt-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat
                            elit augue in suspendisse egestas. Dictum vestibulum mi <br/> et sed nunc, orci fermentum
                            vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean
                            consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat
                            mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. <br/>
                            Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comp;