import {  motion } from 'framer-motion'
import Marquee from 'react-fast-marquee';

const partners = [
    {"id":1, "img": "https://kota.co.uk/static/6604c2bf33b9d8e07c716b366f6fc5fd/Jamie-oliver.svg", "title": "company"},
    {"id":2, "img": "https://kota.co.uk/static/284cbef0a66d6acf616832cb9ebec3e6/comptoir-libanais-1.svg", "title": "company"},
    {"id":3, "img": "https://kota.co.uk/static/b03f1447516c5a8609d721331736cfec/stoli.svg", "title": "company"},
    {"id":4, "img": "https://kota.co.uk/static/a85d51391523a0a6d6d748caa4093372/matchroom.svg", "title": "company"},
    {"id":5, "img": "https://kota.co.uk/static/cb986fb80b7a039c1fb69b767eb792f7/tribepad.svg", "title": "company"},
    {"id":6, "img": "https://kota.co.uk/static/3aaa34068928d8dd0d0ae7ddc11aef35/sonovate.svg", "title": "company"},
    {"id":7, "img": "https://kota.co.uk/static/6518d10f96cf183bfef01836f35daf84/bounce.svg", "title": "company"},
    {"id":8, "img": "https://kota.co.uk/static/a5d3b025844af62719459959c4898f5b/british-red-cross.svg", "title": "company"},
    {"id":9, "img": "https://kota.co.uk/static/54e283881b90bb57d4a0f3cacdc6a232/raw.svg", "title": "company"},
    {"id":10, "img": "https://kota.co.uk/static/e03457e4f40986f1a3c2df40ee2296e9/diageo.svg", "title": "company"},
    {"id":11, "img": "https://kota.co.uk/static/558c2905304525305ceba618bc2fac36/penhaligons.svg", "title": "company"},
    {"id":12, "img": "https://kota.co.uk/static/0fbe7bb098ca0151f7d862dcb11cae7e/tangerine.svg", "title": "company"},
]

const Partners = () => {
    return (
        <>
            <div className="bg-white py-28">
                <div className="">
                    {/* Section Title */}
                    <div>
                        <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="text-black text-2xl lg:text-5xl 2xl:text-6xl font-semibold max-w-2xl 2xl:max-w-4xl m-auto text-center">Proud to partner with industry-leading companies</motion.h1>
                    </div>
                    {/* Partners Image */}
                    <Marquee speed={50} direction='left' gradient={false} pauseOnHover={false} className='mt-16 lg:mt-24'>
                        <div className="flex items-center gap-x-20 justify-center">
                            {partners.map(partner => <div key={partner.id} className={`${partner.title}`}>
                                <img className="m-auto" src={partner.img} alt="Partner Image" srcSet="" loading='lazy'/>
                            </div>)}
                        </div>
                    </Marquee>
                    <Marquee speed={50} direction='right' gradient={false} pauseOnHover={false} className='mt-8'>
                        <div className="flex items-center gap-x-20 justify-center">
                            {partners.map(partner => <div key={partner.id} className={`${partner.title}`}>
                                <img className="m-auto" src={partner.img} alt="Partner Image" title={partner.title} srcSet="" loading='lazy'/>
                            </div>)}
                        </div>
                    </Marquee>
                </div>
            </div>  
        </>
    );
};

export default Partners;