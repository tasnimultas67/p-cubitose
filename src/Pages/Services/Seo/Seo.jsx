import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const offers = [
    { "offerTitle": "Earn page one on Google", "offerDescription": "Achieve top visibility with our expert SEO agency services. We optimize your website to secure top positions on Google, driving higher organic traffic and quality exposure. Our SEO experts help to set up the framework for a successful campaign launch, ensuring that every element, from keyword research to on-page optimization and off-page, is designed to maximize your visibility on the world's most popular search engine." },
    
    { "offerTitle": "Increase your traffic", "offerDescription": "Attract the right visitors to your website, at the right time. Our targeted SEO strategies improve search rankings and generate sustainable traffic to your site. With our data-driven approach, we don't just focus on driving trafficwe focus on driving the right traffic — the kind that delivers measurable results and fuels the long-term success of your business." },
    
    { "offerTitle": "Acquire more customers", "offerDescription": "Leverage SEO to grow your customer base. Our data-centric SEO campaigns connect you with a wider audience, translating into more qualified leads and sales pipeline growth. Jell's SEO strategies not only increase your website's visibility but also analyze user behavior and preferences to fine-tune your marketing approach. This means not just attracting potential customers but also nurturing them throughout their buying journey." },
    
    // {"offerTitle": "Expand your revenue", "offerDescription": "Increase your revenue and minimize your customer acquisition costs. Our partners on average spend 50% less to acquire customers from SEO due to improved rankings. By securing top positions in search results, we not only drive organic traffic but also significantly reduce the reliance on costly pay-per-click advertising and other traditional marketing channels. This means that every dollar you invest in SEO goes further, providing a higher return on investment."},
]


const Seo = () => {
    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    {/* Content */}
                    <div>
                        <div className=''>
                            <h1 className="text-black text-3xl lg:text-6xl  leading-tight flex">Claim the top spot and be your customers’ first choice on search engines &#8599;</h1>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
                            <div></div>
                            <div className="col-span-2">
                                <p className="text-black">We help companies build resilient and sustainable marketing programs. A unique combination of data, advisory, and execution that drives profitability success and empowers online growth.</p>
                            </div>
                        </div>
                    </div>
                    {/* Banner */}
                    <div className='mt-10 lg:mt-20'>
                        <img className='rounded-lg h-[20rem] lg:h-[30rem] 2xl:h-[35rem] object-cover object-bottom w-full shadow-lg' src="https://i.ibb.co/09FVNky/SEO-Banner.webp" alt="" srcSet="" loading='lazy' />
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 mt-20'>
                        
                        <div className='col-span-2 space-y-3 text-black'>
                            <p>Become an industry leader for your product/service in the organic SERPs. Prospects are looking for the best options when they use a search engine like Google—making the competition fierce in most markets. A well thought-out SEO strategy targets your ideal customers and helps you outrank your competitors.</p>
                            <p>The average CTR for position 1 on Google is 43.32% in most markets. Position 1 holds the most value out of every other position in the SERPs. Start ranking within the top positions on Google for your most valuable keywords.</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20'>
                        {
                            offers.map(offer => <div key={offer.offerTitle}>
                                <div className='space-y-3'>
                                    <h2 className='text-black text-xl font-semibold uppercase flex items-center gap-3'>{offer.offerTitle} <ArrowUpRightIcon className='h-5 w-5 text-black'></ArrowUpRightIcon></h2>
                                    <p className='text-black'>{ offer.offerDescription}</p>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>   
        </>
    );
};

export default Seo;