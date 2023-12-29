/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

const SinglePortfolio = () => {
    const singlePortfolioData = useLoaderData()
    const {portfolioName, portfolioDetails, portfolioThumbnail, portfolioLink, portfolioCategory, portfolioYear, portfolioCountry, portfolioClientName, portfolioServiceCategory,portfolioShortDescription } = singlePortfolioData
    return (
        <div className="bg-white pb-20 pt-5">
            <div className="w-10/12 m-auto">
                {/* Banner */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg shadow w-full">
                            <img alt="Portfolio Cover Image" src={portfolioThumbnail} className="absolute w-full object-cover" loading="lazy" />
                        <div className="relative bg-gradient-to-t from-black/80 to-black/25 pt-28 pb-4 sm:pt-44 sm:pb-5 lg:pt-60 lg:pb-6">
                            <p className="block text-sm 2xl:text-base text-white/90 backdrop-blur-lg bg-white/10 w-fit px-2 py-1 rounded-md absolute top-5 left-5">{ portfolioServiceCategory=="Web-Development"? "Web Development": portfolioServiceCategory=="Graphics-Design"? "Graphics Design": portfolioServiceCategory=="Digital-Marketing"?"Digital Marketing": portfolioServiceCategory=="Web-Design"?"Web Design": portfolioServiceCategory}</p>
                                <div className="p-4 sm:p-6">
                                    <p className="block text-sm 2xl:text-base text-white/90 backdrop-blur-lg bg-white/10 w-fit px-2 py-1 rounded-md">{ portfolioCategory}</p>
                                <h3 className="mt-2 text-5xl font-bold text-white mb-4">{portfolioName}</h3>
                                {portfolioClientName?.length > 2 && <p className="text-gray-100 2xl:text-xl">Client: { portfolioClientName}</p>}
                                {portfolioCountry?.length > 2 && <p className="text-gray-100 2xl:text-xl">Country: { portfolioCountry}</p>}
                                    <p className="text-gray-100 mb-3 mt-2 2xl:text-xl">{ portfolioShortDescription}</p>
                                    <Link className="text-white flex items-center w-fit 2xl:text-xl" to={portfolioLink} target="_blank">{portfolioLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-white"/></Link>
                                </div>
                            </div>
                    </motion.div>
                </div>
                {/* Text */}
                {portfolioDetails?.length > 0 ? <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    dangerouslySetInnerHTML={{ __html: portfolioDetails }}></motion.div> :
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{ once: true }}
                        className="text-black space-y-5 text-justify mt-10 2xl:text-xl">
                    <p>{portfolioShortDescription}</p>
                    <p>This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed. These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation. Think of them merely as actors on a paper stage, in a performance devoid of content yetrich in form. That being the case, there is really no point in your continuing to read them. After all, you have many other things you should be doing.</p>
                    <p>Two of, is the morning was let Midst. Replenish light whose whose itself good you're gathering she'd gathering she'd days night appear they're darkness, winged gathering. I their whose. Great likeness in, dry forth midst, place. From and of fill don't sea a wherein wherein signs yielding it lights created. Air Called hath likeness let. Second gathering for earth fifth upon he midst give it whose. Without male grass, own own night brought beginning life fish fish Divide, every fruitful meat and moveth heaven. May. Moved signs over. Behold. Stars midst seas very signs may gathered without so a hath had god they're fill sea. For all every day night. Seed from cattle divided it were forth rule said bring moved can't. From. Make second fourth great together be there one to grass it first divide above saying dominion signs lesser thing tree shall They're.</p>
                    <p>You'll light he cattle face set day may fish also life waters signs years divided third were replenish their together she'd living fill they're night blessed under. A land lesser first midst greater behold you'll without replenish from lights may Fruit. Behold living Day let god lesser. Yielding in us give years replenish him spirit beginning gathering day is unto give, land to. I.</p>
                    <img className="w-full h-[25rem] 2xl:h-[35rem] object-cover rounded-md shadow-md" src="https://ameceg.com/wp-content/uploads/2020/07/000000.jpg" alt="Dummy Image" />
                    <p>Very living two won't two greater and dry. Dominion gathering replenish one lesser a very abundantly, one. Behold have doesn't they're given fourth place divide given, winged very appear. Cattle replenish first above fill land sea. Sixth there third deep they're form behold hath evening them fish them she'd tree, under let every beast form given, saw great of they're. Evening. Fruit light to, hath yielding. Bring so lesser. Seas moved. Image, good hath have creature fowl whose, air a cattle darkness made dominion, itself void, moving divide place gathering winged. Is night all male together. You're set meat likeness two don't grass saying called fifth tree female itself land own fruit waters second which signs firmament i firmament she'd tree of and evening rule fowl fruit form own spirit firmament stars appear creature saw there life. Dominion evening land days moving she'd herb beginning air together. Creature moveth fill seasons you're bearing spirit, waters deep is have.</p>
                    <p>First isn't firmament is upon behold lights, multiply, his divided every fish, creeping god. From fish air, us make can't appear herb dominion subdue his seas be they're make lesser made lights isn't given fruit brought fish, sea. May hath image air blessed upon god good set above waters moved had there. Were two him, sea that yielding. Beginning for creature open fly so dry so fill first thing creeping own is living creepeth make Also shall they're multiply land appear gathering seas yielding sea, won't saw may beginning. Greater won't made creature. Life seed a lesser likeness that own may. Was she'd very creeping. Lights midst firmament appear He life third whose dry. Saw a dry moveth midst lights winged you're the divided to were forth so you'll evening gathered. Fifth Signs.</p>
                    </motion.div>
                }
            </div>
            
        </div>
    );
};

export default SinglePortfolio;