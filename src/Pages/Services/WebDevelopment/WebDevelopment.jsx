import {
  ArrowUpRightIcon
} from '@heroicons/react/24/outline'


const processes = [
    {"id":1, "title": "Discovery", "description": "This is usually the first stage of our development process. Here we gather all the necessary details about your company, its target market, challenges, expected end goals and more. It is a very crucial stage as it lays a strong foundation." },
    
    {"id":2, "title": "Analysis", "description": "Before we define any approach, we need to always understand and define the ultimate development stack that your project will need to achieve its overall goal. Our development team provides a full analysis of site content, traffic, security requirements, and delivers a full description of proper platforms and apis needed to achieve these goals within budget allocations." },
    
    {"id":3, "title": "Systems Architecture", "description": "In this stage, we focus on organizing the overall structure and behavior of all the components, apis, servers, databases, distribution and security systems to a gathered to a workable plan. From a front-end aspect our develop team works closely with our UX team to ensure technical functionalities are defined, all pieces fit together perfectly; creating a larger picture of how items relate with each other within the system." },
    
    {"id":4, "title": "Coding and Development", "description": "When we have presented the design prototypes to you and you have approved them, we now go ahead and do the coding which is basically the backbone of what users see on the website. We use the best of coding tactics to ensure quality results." },
    
    {"id":5, "title": "Quality Assurance", "description": "Before we launch any project, we will assess how optimized it is, how easy to use it is for clients, whether its code is valid. We also ensure that it gives you value for your money and passes our high quality assurance standards for your all your development needs." },
    
    {"id":6, "title": "Launch & Optimization", "description": "If everything passes our rigorous quality assurance development process, we then proceed to launch. We train your staff on using it, begin marketing plan execution and start analyzing its results to see its progress. And unlike other companies, we do not just leave you after launch. We proceed to monitor, analyze and report on your project's progress in order to ensure its performing at peak level."},
]

const WebDevelopment = () => {


    return (
        <div className="bg-white py-28">
            <div className="w-11/12 m-auto">
                <div>
                    <h1 className="text-6xl text-black leading-tight">A solid, well-planned and well-executed website can set you apart from your competition, drive bottom line value, and make you the star of the show</h1>
                </div>
                <div className="grid grid-cols-4 mt-20">
                    <div></div>
                    <div className="col-span-3 flex flex-col gap-2">
                        <p>Your website is the heart of your digital identity: it should be dynamic, interactive and bring visitors back to engage with your brand.</p>
                        <p>At Cubitose, we pride ourselves on building bespoke websites that weave your business needs into the back-end, enabling your teams to manage your site and create engaging content.</p>
                        <p>Guided by your vision, our development team will develop the custom features you need to achieve your goals.</p>
                        <p>Using the latest front-end technologies, we’ll create subtle animations and interactive elements to wow your audience without compromising on functionality.</p>
                        <p>The result is a custom-built website that’s fast, reliable, secure and ready to scale with your business.</p>
                    </div>

                </div>
                {/* Banner Image */}
                <div className="mt-20">
                    <img
                        className=" h-[30rem] w-full object-cover object-bottom rounded-lg shadow-lg"
                        src="https://i.ibb.co/HptGPFn/Banner-1.webp" alt="Web Development Banner" srcSet="" />
                </div>
                {/* Feature process*/}
                <div className="pt-36 pb-20">
                    <h2 className="text-5xl font-medium text-black">How come we are so proficient at this</h2>
                    <div className="grid grid-cols-4 gap-10 mt-28 mb-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3 flex items-center uppercase">Reliable <ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                            <p>Cubitose develops websites with custom functionality to meet your needs. We take pride in coding back-end solutions that act as the unseen backbone to your website.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3 flex items-center uppercase">Lightweight <ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                            <p>We make use of the latest technologies and rely on high-speed HTML, JavaScript and CSS to deliver best-practice website code, often using a headless approach to the CMS.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3 flex items-center uppercase">Responsive <ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                            <p>We test, tweak and optimise websites to ensure the most seamless experience, regardless of the user’s device.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3 flex items-center uppercase">Optimised <ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                            <p>Our team’s technical expertise allows us to deliver high-performing websites that are fully optimised in line with SEO best practice.</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            {/* Development Process */}
                <div className="bg-themeColor lg:py-28">
                    <div className='w-11/12 m-auto'>
                        <h1 className="text-5xl text-white">Our Development Process</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
                            {
                                processes.map(process => (
                                    <div key={process.id}>
                                        <h2 className="mb-5 text-xl text-white font-semibold uppercase flex items-center">{ process.title}<ArrowUpRightIcon className='h-5 w-5 ml-2'></ArrowUpRightIcon></h2>
                                        <p className='text-white'>{ process.description}</p>
                                    </div>
                                ))
                            }
                            
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default WebDevelopment;