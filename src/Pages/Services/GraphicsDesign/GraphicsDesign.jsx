
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
                        <div className="col-span-2">
                            <p className="">The benefits of a hands-on design team are now at your fingertips. Our dedicated experts aim to deliver you high-quality designs in record time, at a fraction of the price.</p>
                        </div>
                    </div>
                    {/* Banner */}
                    <div className="mt-10 lg:mt-20">
                        <img className="h-96 2xl:h-[35rem] w-full object-cover object-center rounded-lg shadow-lg" src="https://i.ibb.co/GQ2v1Xb/Graphics-Design-Banner3.webp" alt="Graphics Design Banner" loading="lazy" srcSet="" />
                    </div>
                    {/* About section */}
                    <div  className="mt-20">
                        <h1 className="text-center text-5xl font-semibold">Game-Changing Graphic Design Services</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GraphicsDesign;