import arrow2 from '../../assets/arrow2.svg'
import Marquee from 'react-fast-marquee';

const MarqueeCom = () => {
    return (
        <>
            <div className=' '>
                <Marquee speed={50} gradient={false} pauseOnHover={false} className=' marquee-text font-semibold py-4 text-black'>
                    <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /></Marquee>
            </div>
            
        </>
    );
};

export default MarqueeCom;