import { useLoaderData } from "react-router-dom";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";

const PPortfolios = () => {
    const loadedPortfolios = useLoaderData()

    return (
        <div className="bg-white py-24">
            <div className="w-11/12 m-auto">
                {/* Portfolio Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                    {
                        loadedPortfolios.map(portfolio => <PortfolioCard portfolio={portfolio} key={portfolio._id}>

                        </PortfolioCard>)
                    }
                </div>
            </div>
        </div>
    );
};


export default PPortfolios;