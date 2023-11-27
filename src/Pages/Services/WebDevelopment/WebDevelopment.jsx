
const WebDevelopment = () => {
    // https://i.ibb.co/HptGPFn/Banner-1.webp
    // https://i.ibb.co/T01NyD1/Banner-2.webp
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
                    <div className="grid grid-cols-4 gap-10 mt-28">
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3">Reliable</h2>
                            <p>Cubitose develops websites with custom functionality to meet your needs. We take pride in coding back-end solutions that act as the unseen backbone to your website.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3">Lightweight</h2>
                            <p>We make use of the latest technologies and rely on high-speed HTML, JavaScript and CSS to deliver best-practice website code, often using a headless approach to the CMS.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3">Responsive</h2>
                            <p>We test, tweak and optimise websites to ensure the most seamless experience, regardless of the user’s device.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3">Optimised</h2>
                            <p>Our team’s technical expertise allows us to deliver high-performing websites that are fully optimised in line with SEO best practice.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopment;