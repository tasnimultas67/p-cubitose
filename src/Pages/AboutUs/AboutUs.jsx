import OurTeam from "../../Components/OurTeam/OurTeam";
import {  motion } from 'framer-motion'


const AboutUs = () => {
    return (
        <>
            <div className="bg-white py-28">
                <div className="w-11/12 m-auto">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="text-grayColor text-3xl lg:text-5xl lg:leading-tight">We are the <span className="text-black ">first call</span> for every outrageous, unthinkable and unknown <span className="text-black">possibility</span> in the field of digitally immersive experiences — <span className="text-black">all with highly competitive rates.</span></motion.h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
                        <div className="hidden lg:block"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{ once: true }}
                            className="col-span-2">
                            <p>Our mission is to create stunning and functional websites that showcase your brand and vision. We are a web agency that specializes in web design, development, and digital marketing. We have a team of experts who are passionate about creating beautiful and user-friendly websites that meet your needs and goals. Whether you need a simple landing page, a complex e-commerce site, or a custom web application, we can help you turn your ideas into reality. We also offer SEO, social media, and content marketing services to help you reach your target audience and grow your online presence. We are not just a web agency, we are your partners in success. Contact us today and let us help you create your dream website.</p>
                        </motion.div>
                    </div>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="mt-20">
                        <img className="rounded-xl shadow-lg h-[20rem] lg:h-[30rem] w-full object-cover object-center" src="https://images.unsplash.com/photo-1701003798116-b891466edf27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us Banner" srcSet="" />
                    </motion.div>
                    <OurTeam></OurTeam>
                </div>
            </div>  
        </>
    );
};

export default AboutUs;