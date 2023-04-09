import './App.css';
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Comp from "./components/Comp/comp";
import Footer from "./components/Footer/footer";
import Div from "./components/Div/div";
import Start from "./components/Start/Start";
import Prof from "./components/Proffesional/prof";
import TopBrand from "./components/TopBrand/topBrand";

function App() {
    const [dark, setDark] = useState(false)
    function getDark() {
        setDark(!dark)
    }
    return (
        <>
            <Header/>
            <Hero/>
            <Div/>
            <Comp/>
            <Start/>
            <Prof/>
            <TopBrand/>
            <Footer/>
        </>
    );
}

export default App;
