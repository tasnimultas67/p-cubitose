
const PortfolioCard = ({ loadedPortfolios }) => {
    const { portfolioName, portfolioThumbnail, portfolioShortDescription } = loadedPortfolios
    return (
        <div className='bg-white border p-4 rounded-lg group hover:border-themeColor hover:cursor-default overflow-hidden'>
            <div className="overflow-hidden rounded-lg">
                <img className="rounded-lg group-hover:scale-125 duration-300" src={portfolioThumbnail} alt="Portfolio Thumnail" /> 
            </div>
            <div className="mt-5 space-y-2">
                <h2 className="font-semibold text-xl">{portfolioName}</h2>
                <p className="text-base">{ portfolioShortDescription}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;