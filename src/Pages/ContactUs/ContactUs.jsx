import { useState } from "react";
import {  motion } from 'framer-motion'


const ContactUs = () => {
    const [msgDelivery, setMsgDelivery] = useState(null)
    const [error, setError] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = (e) => {
        e.preventDefault()
        let form = e.target;
        let form_name = form.name.value;
        let form_email = form.email.value;
        let form_subject = form.subject.value;
        let form_url = form.url.value;
        let form_message = form.message.value;
        const formInfo = { form_name, form_email, form_subject, form_url, form_message }
        setIsSubmitted(true)
        fetch("https://formsubmit.co/ajax/info.cubitose@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: form_name,
                email: form_email,
                website_url: form_url,
                message: form_message,
                _subject: form_subject
            })
        })
            .then(res => res.json())
            .then(data => {
                setMsgDelivery(data)
                setIsSubmitted(false)
            })
            .catch(error => setError(error));
        form.reset()
    }

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
                            className="text-3xl lg:text-6xl 2xl:text-7xl font-semibold text-black">We’d love to hear from you.</motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{ once: true }}
                        className="lg:w-9/12 lg:pl-28 mt-8">
                        <p className="2xl:text-xl">We’ll reach out to schedule time to understand your challenges and how we can start to overcome them together. And if we’re not the right agency for you, we will do our best to refer you to someone who is.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                            }}
                            viewport={{ once: true }}
                        >
                            <img src="https://i.ibb.co/nQRq55Z/contact-us.webp" className="2xl:h-[50rem] object-fill" alt="Contact Us Image" srcSet="" loading='lazy'/>
                        </motion.div>
                        {/* Contact Form */}
                        <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        >
                            {isSubmitted ? <p className="text-center 2xl:text-xl">Loading..</p> : 
                        <div>
                            {msgDelivery? "": <form className="lg:px-20 pt-10 lg:pt-0" onSubmit={submitForm}>
                                <div className="mb-4 flex flex-col gap-6">
                                    {/* Name */}
                                    <div className="relative h-11 2xl:h-12 w-full">
                                        <input
                                        className="peer h-full w-full rounded-md border bg-gray-100 px-3 py-3 font-sans text-sm 2xl:text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-themeColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=""
                                            name="name"
                                            type="text"
                                            id="form_name"
                                            required
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm 2xl:peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[4.1] 2xl:peer-placeholder-shown:leading-[3.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] 2xl:peer-focus:text-[16px] peer-focus:leading-tight 2xl:peer-focus:leading-[0.75] peer-focus:text-themeColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-themeColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-themeColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name <span className="text-red-800">*</span>
                                        </label>
                                    </div>
                                    {/* Email */}
                                    <div className="relative h-11 2xl:h-12 w-full">
                                        <input
                                        className="peer h-full w-full rounded-md border bg-gray-100 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-themeColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 2xl:text-xl"
                                            placeholder=" "
                                            type="email"
                                            name="email"
                                            id="form_email"
                                            required
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-themeColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-themeColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-themeColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 2xl:peer-placeholder-shown:text-xl 2xl:peer-placeholder-shown:leading-[3.1] 2xl:peer-focus:text-[16px] 2xl:peer-focus:leading-[0.75]">
                                        Email<span className="text-red-800">*</span>
                                        </label>
                                    </div>
                                    {/* Subject */}
                                    <div className="relative h-11 2xl:h-12 w-full">
                                        <input
                                        className="peer h-full w-full rounded-md border bg-gray-100 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-themeColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 2xl:text-xl"
                                            placeholder=" "
                                            type="text"
                                            name="subject"
                                            id="form_subject"
                                            required
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-themeColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-themeColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-themeColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 2xl:peer-placeholder-shown:text-xl 2xl:peer-placeholder-shown:leading-[3.1] 2xl:peer-focus:text-[16px] 2xl:peer-focus:leading-[0.75]">
                                        Subject<span className="text-red-800">*</span>
                                        </label>
                                    </div>
                                    {/* Company Website */}
                                    <div className="relative h-11 2xl:h-12 w-full">
                                        <input
                                        className="peer h-full w-full rounded-md border bg-gray-100 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-themeColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 2xl:text-xl"
                                            placeholder=" "
                                            type="url"
                                            name="url"
                                            id="form_url"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-themeColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-themeColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-themeColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 2xl:peer-placeholder-shown:text-xl 2xl:peer-placeholder-shown:leading-[3.1] 2xl:peer-focus:text-[16px] 2xl:peer-focus:leading-[0.75]">
                                        Website
                                        </label>
                                    </div>
                                    {/* Message */}
                                    <div className="relative w-full">
                                        <textarea
                                        className="peer h-full w-full rounded-md border bg-gray-100 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-themeColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 2xl:text-xl"
                                            placeholder=" "
                                            required
                                            name="message"
                                            id="form_message"
                                            rows="8" cols="50"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-themeColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-themeColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-themeColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 2xl:peer-placeholder-shown:text-xl 2xl:peer-placeholder-shown:leading-[3.1] 2xl:peer-focus:text-[16px] 2xl:peer-focus:leading-[0.75]">
                                        Message<span className="text-red-800">*</span>
                                        </label>
                                    </div>
                                    </div>
                                    {error && <p className="text-red-700 text-center" >{ error}</p>}
                                <button
                                className="bg-themeColor w-full text-white py-2 px-4 rounded-md hover:shadow-lg focus:ring 2xl:text-xl"
                                type="submit"
                                data-ripple-light="true"
                                >
                                Submit 
                                </button>
                            </form>}
                            </div>}
                            {msgDelivery && <div className="flex items-center justify-center w-8/12 m-auto">
                                <p className="text-green-700 text-center 2xl:text-xl">{msgDelivery.message}</p>
                            </div>}
                        </motion.div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ContactUs;