import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


const keys = [
    { "id": 1, "keyTitle": "Fast Turnaround Time", "keyDescription": "Our Hands-On Team Of Graphic Designers Ensure You Get Your Tasks Completed Within 1-2 Business Days, Guaranteed." },
    
    { "id": 2, "keyTitle": "No Hidden Charges", "keyDescription": "We Offer Flat, Affordable Monthly Rates So You Can Always Get Your Money’s Worth." },
    
    { "id": 3, "keyTitle": "Unlimited Revisions", "keyDescription": "With Our Passion To Fully Satisfy Your Every Request, We Offer An UNLIMITED Number Of Revisions Until The Job Is Done." },
    
    { "id": 4, "keyTitle": "Complete Source Files", "keyDescription": "We Provide The Source Files For Each And Every Project, Accurate And 100% Complete." },
    
    { "id": 5, "keyTitle": "Cream of the Crop", "keyDescription": "We Employ Only The Top 1% In The Graphic Design Industry." },
    
    {"id": 6, "keyTitle": "Freedom to Scale", "keyDescription":"With Our No-Frills, No-Contract Service Bundles, You Can Choose To Scale However And Whenever You’d Like."},
]


const GraphicsDesign = () => {
    return (
        <div>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    <div>
                        <h1 className="text-3xl lg:text-6xl lg:leading-tight text-grayColor "><span className="text-black">Fast</span> & <span className="text-black">Effective</span> Graphic Design. <span className="text-black">Flat</span> & <span className="text-black">Affordable Rates</span>.</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
                        <div className="hidden lg:block"></div>
                        <div className="col-span-2 space-y-7">
                            <p className="">The benefits of a hands-on design team are now at your fingertips. Our dedicated experts aim to deliver you high-quality designs in record time, at a fraction of the price.</p>
                            <p>Staying up-to-date with the world of design is critical. Retro is fabulous when retro is your look, but accidental retro (because you’re exceptionally outdated) is inadequate to meet the expectations of your clients. Design continually changes, new concepts emerge, and old concepts return repolished. We don’t want you to ride a design trend that fades into obscurity and we don’t want you to become irrelevant by never adapting; we aim to place you in a position where your designs will be current, relevant, and suit both you and your customers. Graphic Design is our craft. We would love to use it to enable you to stand out in yours.</p>
                        </div>
                    </div>
                    {/* Banner */}
                    <div className="mt-10 lg:mt-20">
                        <img className="h-[20rem] lg:h-[30rem] 2xl:h-[35rem] w-full object-cover object-center rounded-lg shadow-lg" src="https://i.ibb.co/GQ2v1Xb/Graphics-Design-Banner3.webp" alt="Graphics Design Banner" loading="lazy" srcSet="" />
                    </div>
                    {/* About section */}
                    <div  className="pt-20 space-y-10">
                        <h1 className="text-3xl lg:text-5xl">Game-Changing Graphic Design Services</h1>
                        <p className=" w-full lg:w-7/12">With Cubitose, you can literally do more, save more, be more. Rebrand your business with the most effective and creative graphic designs, made by the top 1% of graphic designers in the industry.</p>
                    </div>
                    <div className="pt-20 space-y-8 lg:mb-14">
                        <h1 className="text-4xl">Trusted By</h1>
                        <p className="w-full lg:w-6/12">Trusted by thousands of clients throughout the country, Cubitose’s highly-skilled designers are dedicated to upgrading your design game to its fullest potential.</p>
                        <img className="w" src="https://www.graphicszoo.com/public/assets/frontend/gz-new/img/logo-client.png" alt="Trusted Companies logo" srcSet="" />
                    </div>
                    <div className="py-32">
                        <div>
                            <h1 className="text-3xl lg:text-5xl lg:leading-tight">We stay on top of current design trends and concepts, aiming to be ahead of the curve while also implementing classic design principles into our work</h1>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mt-14">
                            <p className="hidden lg:block"></p>
                            <p className="col-span-2">We eat with our eyes first. We decide to read a book based on its cover. We discover attraction based on appearance. What is visual makes an impact. Your visual resources make an impact. Why not leverage them in your favor? Create a beautiful brand that is uniquely you and consistent across print and web design. We want to pair your vision with our creativity and empower you to stand out and look great doing it.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-themeColor py-28">
                    <div className="w-11/12 m-auto">
                        <div className="space-y-8"> 
                            <h2 className="text-white text-3xl lg:text-5xl">How Cubitose Helps You</h2>
                            <p className="text-base text-white w-full lg:w-8/12">From branding and web design, to advertising and artworks, we’ve got you covered. Improve the edge of all your graphics with the Cubitose standard of quality.</p>
                        </div>
                        {/* keys */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 lg:gap-20">
                            {
                                keys.map(key => (
                        <div key={key.id}>
                            <h2 className="mb-3 lg:mb-5 text-xl text-white font-semibold uppercase flex items-center">{key.keyTitle} <ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                                        <p className="text-white text-base">{ key.keyDescription}</p>
                        </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default GraphicsDesign;