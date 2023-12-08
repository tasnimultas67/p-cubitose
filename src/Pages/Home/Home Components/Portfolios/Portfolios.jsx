import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Portfolios.css'
import { useEffect, useState } from "react";

const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])
    useEffect(() => {
        fetch('https://cubitose-backend-production.up.railway.app/portfolio/')
            .then(res => res.json())
            .then(data => setPortfolios(data))
        
    },[])
    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center pb-20">
                        {/* Section Title */}
                        <div className="col-span-2">
                            <h1 className="text-black text-3xl lg:text-6xl font-semibold ">We are experts in bringing brands to life digitally.</h1>
                        </div>
                        {/* Explore more Button */}
                        <div className="text-left mt-5 lg:mt-0 lg:text-right ">
                            <Link to="/portfolios"><button className="py-2 px-5 bg-themeColor text-white rounded-md">Explore More</button></Link>
                        </div>
                    </div>
                </div>
                {/* Portfolio Card Slider */}
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={15}
                        centeredSlides={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            portfolios.map(portfolio => <SwiperSlide key={portfolio._id}>
                            <div className='relative overflow-hidden w-full h-[22rem] lg:h-[30rem] rounded-md bg-white bg-clip-border group/p1 cursor-pointer shadow-2xl'>
                                    <img alt="Portfolio Cover Image" src="https://i.ibb.co/0tnQW7S/process2.webp" className="absolute inset-0 h-full w-full object-cover group-hover/p1:scale-125 duration-300 ease-in-out" loading="lazy" />
                                    <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/10 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end ">
                                        <div className="p-5">
                                            <h3 className="text-2xl font-semibold text-white pb-1">{portfolio.portfolioName}</h3>
                                            <p className="text-white text-sm">{portfolio.portfolioShortDescription}</p>
                                        </div>
                                    </div>
                            </div>
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