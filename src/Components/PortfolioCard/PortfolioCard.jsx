import { Link } from "react-router-dom";
import {  motion } from 'framer-motion'


const PortfolioCard = ({ portfolio }) => {
    const {_id, portfolioName, portfolioThumbnail, portfolioShortDescription, portfolioServiceCategory } = portfolio

    return (
        <Link to={`/portfolios/portfolio/${_id}`} className="">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.5,
                }}
                viewport={{ once: true }}
                className='bg-white border p-4 rounded-lg group hover:border-themeColor hover:cursor-default overflow-hidden !cursor-pointer'>
                    <div className="overflow-hidden rounded-lg">
                        <img className="rounded-lg group-hover:scale-125 duration-300 h-[14rem] w-full object-cover" src={portfolioThumbnail} alt="Portfolio Thumnail" /> 
                    </div>
                    <div className="mt-5 space-y-2">
                        {portfolioServiceCategory == "Web-Development" ? <p className="border w-fit px-3 py-0.5 text-xs bg-themeColor/10 rounded-md">Web Development</p> : portfolioServiceCategory == "Web-Design" ? <p className="border w-fit px-3 py-0.5 text-xs bg-themeColor/10 rounded-md">Web Design</p> : <p className="border w-fit px-3 py-0.5 text-xs bg-themeColor/10 rounded-md">{ portfolioServiceCategory}</p>}
                        <h2 className="font-semibold text-xl text-black">{portfolioName}</h2>
                        <p className="text-base">{ portfolioShortDescription.length > 80? portfolioShortDescription.substring(0, 80 -3) + "..." : portfolioShortDescription}</p>
                    </div>
            </motion.div>
        </Link>
    );
};

export default PortfolioCard;