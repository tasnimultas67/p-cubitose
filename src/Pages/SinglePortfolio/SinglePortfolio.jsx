import { useLoaderData } from "react-router-dom";

const SinglePortfolio = () => {
    const singlePortfolioData = useLoaderData()
    const {portfolioName, portfolioDetails, portfolioThumbnail, portfolioLink, portfolioCategory, portfolioYear, portfolioCountry, portfolioClientName, portfolioServiceCategory,portfolioShortDescription } = singlePortfolioData
    return (
        <div className="bg-white py-28">
            <div className="w-7/12 m-auto">
                <div>
                    <h1 className="text-4xl text-center text-black font-semibold">{ portfolioName}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default SinglePortfolio;