const About = () => {
    return (
        <>
            <div className='bg-white py-28'>
                <div className='w-11/12 m-auto'>
                    {/* Section content */}
                    <div>
                        <h1 className="text-6xl font-semibold text-[#767676] mb-10">We&apos;re a collective of craftspeople creating lasting value for <span className="text-black">brands</span>, <span className="text-black">destinations</span> & <span className="text-black">places</span>.</h1>
                        <p className="text-lg text-black w-8/12">We are the first call for every outrageous, unthinkable and unknown possibility in the field of digitally immersive experiences — all with highly competitive rates.</p>
                    </div>
                    {/* Section Image */}
                    <div className="mt-16">
                        <img className="rounded-lg shadow-lg h-96 w-full object-cover" src="https://images.unsplash.com/photo-1627742259899-187f2f92beaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcSet="" />
                    </div>
                </div>

            </div>  
        </>
    );
};

export default About;