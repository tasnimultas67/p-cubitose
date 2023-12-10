import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  motion } from 'framer-motion'


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://cubitose-backend-production.up.railway.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }, [])
    return (
        <div className='bg-white pb-10 lg:py-20'>
            <div className='w-11/12 m-auto'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='text-center text-3xl lg:text-5xl font-semibold text-black'>Thoughts from our clients</motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className='mt-10'>
                    <Swiper
                        modules={[Autoplay,]}
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                    >
                    {reviews.map(review => <SwiperSlide key={review._id}>
                            
                        <figure className="max-w-screen-md mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <blockquote>
                                <p className="text-base lg:text-xl italic text-gray-900 dark:text-white">&quot;{review.customerReview}&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">{ review.customerName}</cite>
                                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{ review.customerPosition}</cite>
                                </div>
                            </figcaption>
                        </figure>

                    </SwiperSlide>)}
                    </Swiper>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;