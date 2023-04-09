import './App.css';
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Comp from "./components/Comp/comp";
import Footer from "./components/Footer/footer";
import Div from "./components/Div/div";
import Start from "./components/Start/Start";
import Prof from "./components/Proffesional/prof";
import TopBrand from "./components/TopBrand/topBrand";
import {useState} from "react";

function App() {
    const [dark, setDark] = useState(false)
    function getDark() {
        setDark(!dark)
    }
    return (
        <>
            <Header dark={dark} getDark={getDark}/>
            <Hero getDark={getDark} dark={dark}/>
            <Div getDark={getDark} dark={dark}/>
            <Comp getDark={getDark} dark={dark}/>
            <Start getDark={getDark} dark={dark}/>
            <Prof getDark={getDark} dark={dark}/>
            <TopBrand getDark={getDark} dark={dark}/>
            <Footer getDark={getDark}/>
        </>
    );
}

export default App;
