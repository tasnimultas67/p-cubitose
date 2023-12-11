import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import {  motion } from 'framer-motion'
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";


const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])
    useEffect(() => {
        fetch('https://cubitose-backend-production.up.railway.app/portfolio/')
            .then(res => res.json())
            .then(data => setPortfolios(data))
        
    },[])
    return (
        <>
            <div className="bg-white py-16 lg:py-28">
                <div className="w-11/12 m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center pb-20">
                        {/* Section Title */}
                        <div className="col-span-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="text-black text-3xl lg:text-6xl lg:leading-tight font-semibold ">We are experts in bringing brands to life digitally.</motion.h1>
                        </div>
                        {/* Explore more Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="text-left mt-5 lg:mt-0 lg:text-right ">
                            <Link to="/portfolios"><button className="py-2 px-5 bg-themeColor text-white rounded-md">Explore More</button></Link>
                        </motion.div>
                    </div>
                </div>
                {/* Portfolio Card Slider */}
                <div className="m-3 lg:m-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        centeredSlides={true}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        }}
                        
                        className="mySwiper"
                    >
                        {
                            portfolios.map(portfolio => <SwiperSlide key={portfolio._id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    viewport={{ once: true }}
                                    className='relative overflow-hidden w-full h-[22rem] lg:h-[30rem] rounded-md bg-white bg-clip-border group/p1 cursor-pointer shadow-2xl'>
                                    <Link to={`/portfolios/portfolio/${portfolio._id}`}>
                                        <img alt="Portfolio Cover Image" src={portfolio.portfolioThumbnail} className="absolute inset-0 h-full w-full object-cover group-hover/p1:scale-125 duration-300 ease-in-out" loading="lazy" />
                                        <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/40 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end ">
                                            <div className="p-5 space-y-3">
                                                <p className="block text-sm text-white/90 backdrop-blur-lg bg-white/10 w-fit px-2 py-1 rounded-md">{ portfolio.portfolioCategory}</p>
                                                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">{portfolio.portfolioName} <ArrowUpRightIcon className="h-6 w-6"></ArrowUpRightIcon></h3>
                                                <p className="text-white text-sm">{ portfolio.portfolioShortDescription.length > 80? portfolio.portfolioShortDescription.substring(0, 80 -3) + "..." : portfolio.portfolioShortDescription}</p>
                                            </div>
                                        </div>
                                    </Link>
                            </motion.div>
                        </SwiperSlide>
                            )
                        }

                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Portfolios;