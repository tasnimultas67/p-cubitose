
const PortfolioCard = ({ portfolio }) => {
    const { portfolioName, portfolioThumbnail, portfolioShortDescription } = portfolio

    return (
        <div className='bg-white border p-4 rounded-lg group hover:border-themeColor hover:cursor-default overflow-hidden'>
            <div className="overflow-hidden rounded-lg">
                <img className="rounded-lg group-hover:scale-125 duration-300 h-[14rem] w-full object-cover" src={portfolioThumbnail} alt="Portfolio Thumnail" /> 
            </div>
            <div className="mt-5 space-y-2">
                <h2 className="font-semibold text-xl text-black">{portfolioName}</h2>
                <p className="text-base">{ portfolioShortDescription.length > 80? portfolioShortDescription.substring(0, 80 -3) + "..." : portfolioShortDescription}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;