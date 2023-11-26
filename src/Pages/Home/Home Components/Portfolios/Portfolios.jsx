import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Portfolios.css'

const portfolios = [
    {"id": 1, "img": "https://i.ibb.co/0tnQW7S/process2.webp", "title": "Dhaka Startup", "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, deserunt!"},
    {"id": 2,"img": "https://i.ibb.co/0tnQW7S/process2.webp", "title": "Beign Hero", "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, deserunt!"},
    {"id": 3,"img": "https://i.ibb.co/0tnQW7S/process2.webp", "title": "Being Human", "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, deserunt!"},
    {"id": 4,"img": "https://i.ibb.co/0tnQW7S/process2.webp", "title": "Hello Bangla", "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, deserunt!"},
]

const Portfolios = () => {
    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    <div className="grid grid-cols-3 items-center pb-28">
                        {/* Section Title */}
                        <div className="col-span-2">
                            <h1 className="text-black text-6xl font-semibold ">We are experts in bringing brands to life digitally.</h1>
                        </div>
                        {/* Explore more Button */}
                        <div className="text-right ">
                            <Link to="#"><button className="py-2 px-4 bg-themeColor text-white rounded-md">Explore More</button></Link>
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
                            portfolios.map(portfolio => <SwiperSlide key={portfolio.id}>
                            <div className='relative overflow-hidden w-full h-[30rem] rounded-md bg-white bg-clip-border group/p1 cursor-pointer'>
                                    <img alt="Portfolio Cover Image" src={portfolio.img} className="absolute inset-0 h-full w-full object-cover group-hover/p1:scale-125 duration-300 ease-in-out" loading="lazy" />
                                    <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/10 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end ">
                                        <div className="p-5">
                                            <h3 className="text-2xl font-semibold text-white pb-1">{portfolio.title}</h3>
                                            <p className="text-white text-sm">{portfolio.description}</p>
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