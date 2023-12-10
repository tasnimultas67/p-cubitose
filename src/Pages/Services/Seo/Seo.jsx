import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  motion } from 'framer-motion'


const offers = [
    { "offerTitle": "Earn page one on Google", "offerDescription": "Achieve top visibility with our expert SEO agency services. We optimize your website to secure top positions on Google, driving higher organic traffic and quality exposure. Our SEO experts help to set up the framework for a successful campaign launch, ensuring that every element, from keyword research to on-page optimization and off-page, is designed to maximize your visibility on the world's most popular search engine." },
    
    { "offerTitle": "Increase your traffic", "offerDescription": "Attract the right visitors to your website, at the right time. Our targeted SEO strategies improve search rankings and generate sustainable traffic to your site. With our data-driven approach, we don't just focus on driving trafficwe focus on driving the right traffic — the kind that delivers measurable results and fuels the long-term success of your business." },
    
    { "offerTitle": "Acquire more customers", "offerDescription": "Leverage SEO to grow your customer base. Our data-centric SEO campaigns connect you with a wider audience, translating into more qualified leads and sales pipeline growth. Jell's SEO strategies not only increase your website's visibility but also analyze user behavior and preferences to fine-tune your marketing approach. This means not just attracting potential customers but also nurturing them throughout their buying journey." },
    
    // {"offerTitle": "Expand your revenue", "offerDescription": "Increase your revenue and minimize your customer acquisition costs. Our partners on average spend 50% less to acquire customers from SEO due to improved rankings. By securing top positions in search results, we not only drive organic traffic but also significantly reduce the reliance on costly pay-per-click advertising and other traditional marketing channels. This means that every dollar you invest in SEO goes further, providing a higher return on investment."},
]


const Seo = () => {
    const reviewsData = useLoaderData()
    const [reviews, setReviews] = useState(reviewsData)

    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    {/* Content */}
                    <div>
                        <div className=''>
                            <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="text-black text-3xl lg:text-6xl lg:leading-tight">Claim the top spot and be your customers’ first choice on search engines &#8599;</motion.h1>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
                            <div></div>
                            <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{ once: true }}
                            className="col-span-2">
                                <p className="text-black">We help companies build resilient and sustainable marketing programs. A unique combination of data, advisory, and execution that drives profitability success and empowers online growth.</p>
                            </motion.div>
                        </div>
                    </div>
                    {/* Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className='mt-10 lg:mt-20'>
                        <img className='rounded-lg h-[20rem] lg:h-[30rem] 2xl:h-[35rem] object-cover object-bottom w-full shadow-lg' src="https://i.ibb.co/09FVNky/SEO-Banner.webp" alt="" srcSet="" loading='lazy' />
                    </motion.div>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 mt-20'>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className='col-span-2 space-y-3 text-black'>
                            <p>Become an industry leader for your product/service in the organic SERPs. Prospects are looking for the best options when they use a search engine like Google—making the competition fierce in most markets. A well thought-out SEO strategy targets your ideal customers and helps you outrank your competitors.</p>
                            <p>The average CTR for position 1 on Google is 43.32% in most markets. Position 1 holds the most value out of every other position in the SERPs. Start ranking within the top positions on Google for your most valuable keywords.</p>
                        </motion.div>
                        <div></div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20'>
                        {
                            offers.map(offer => <motion.div
                            initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.8,
                                }}
                                viewport={{ once: true }}
                                key={offer.offerTitle}>
                                <div className='space-y-3'>
                                    <h2 className='text-black text-xl font-semibold uppercase flex items-center gap-3'>{offer.offerTitle} <ArrowUpRightIcon className='h-5 w-5 text-black'></ArrowUpRightIcon></h2>
                                    <p className='text-black'>{ offer.offerDescription}</p>
                                </div>
                            </motion.div>)
                        }
                    </div>
                    
                    {/* Reviews Section */}
                    <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                        className='mt-28'>
                            <Swiper
                            modules={[Autoplay,]}
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}>
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
        </>
    );
};

export default Seo;