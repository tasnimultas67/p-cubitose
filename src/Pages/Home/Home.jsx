
import MarqueeCom from "../../Components/Marquee/MarqueeCom";
import Reviews from "../../Components/Reviews/Reviews";
import About from "./Home Components/About/About";
import Hero from "./Home Components/Hero/Hero";
import Partners from "./Home Components/Partners/Partners";
import Portfolios from "./Home Components/Portfolios/Portfolios";
import Services from "./Home Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Portfolios></Portfolios>
            <MarqueeCom></MarqueeCom>
            <Services></Services>
            <About></About>
            <Partners></Partners>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;