import About from "./Home Components/About/About";
import Hero from "./Home Components/Hero/Hero";
import Portfolios from "./Home Components/Portfolios/Portfolios";
import Services from "./Home Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Portfolios></Portfolios>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;