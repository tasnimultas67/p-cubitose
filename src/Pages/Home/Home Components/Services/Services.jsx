
const services = [
    {"id":1, "img":"https://i.ibb.co/0tnQW7S/process2.webp", "sTitle":"Web Development", "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quidem?"},
    {"id":2, "img":"https://i.ibb.co/0tnQW7S/process2.webp", "sTitle":"Graphics Design", "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quidem?"},
    {"id":3, "img":"https://i.ibb.co/0tnQW7S/process2.webp", "sTitle":"Digital Marketing", "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quidem?"},
]

const Services = () => {
    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    <div>
                        <h1 className="text-3xl lg:text-6xl text-black font-semibold text-center">So what do we do exactly?</h1>
                    </div>
                    {/* Service Cards */}
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            services.map(service => <div key={service.id} className='relative overflow-hidden w-full h-[20rem] lg:h-[30rem] rounded-md bg-white bg-clip-border group/p1 cursor-pointer'>
                            <img alt="Service Cover Image" src={service.img} className="absolute inset-0 h-full w-full object-cover group-hover/p1:scale-125 duration-300 ease-in-out" loading="lazy" />
                            <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/100 via-black/10 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end ">
                                <div className="p-5">
                                        <h3 className="text-3xl font-semibold text-white pb-1">{ service.sTitle}</h3>
                                        <p className="text-white text-base">{ service.description}</p>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Services;