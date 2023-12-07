
const PortfolioCard = ({ portfolio }) => {
    
    console.log("hello")

    return (
        <div className='bg-white border p-4 rounded-lg group hover:border-themeColor hover:cursor-default overflow-hidden'>
            <div className="overflow-hidden rounded-lg">
                <img className="rounded-lg group-hover:scale-125 duration-300" src={portfolio.portfolioThumbnail} alt="Portfolio Thumnail" /> 
            </div>
            <div className="mt-5 space-y-2">
                <h2 className="font-semibold text-xl">{portfolio.portfolioTitle}</h2>
                <p className="text-base">{ portfolio.shortDescription}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;