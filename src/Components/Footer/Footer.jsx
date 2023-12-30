import { Link } from "react-router-dom";
import './Footer.css'
import {EnvelopeIcon} from "@heroicons/react/24/outline";

const pages = [
    {"_id": "page1", "pageTitle":"Home", "pageUrl": "/"},
    {"_id": "page2", "pageTitle":"About Us", "pageUrl": "/about-us"},
    {"_id": "page3", "pageTitle":"Portfolios", "pageUrl": "/portfolios"},
    {"_id": "page4", "pageTitle":"Contact us", "pageUrl": "/contact-us"},
]
const servicesPages = [
    {"_id": "service1", "pageTitle":"Web Development", "pageUrl": "/services/web-development"},
    {"_id": "service2", "pageTitle":"Graphics Design", "pageUrl": "/services/graphics-design"},
    {"_id": "service3", "pageTitle":"Search Engine Optimization", "pageUrl": "/services/search-engine-optimization"},
]

const Footer = () => {
    return (
        <footer className="bg-themeColor pt-28 pb-9">
            <div className="w-10/12 lg:w-11/12 m-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* First Column */}
                    <div>
                        <Link to='/'><img className="h-14 mb-5 2xl:h-20" src="/white-logo.png" alt="Footer Logo" srcSet="" /></Link>
                        <p className=" text-white mb-4 2xl:text-xl">We turn ideas into extraordinary digital products & experiences</p>
                        <Link className="text-white flex items-center gap-2 2xl:text-xl" to="mailto:info.cubitose@gmail.com"><EnvelopeIcon className="h-5 w-5"></EnvelopeIcon>info.cubitose@gmail.com</Link>
                    </div>
                    {/* Second Column */}
                    <div>
                        <ul className="page-list">
                            {
                                pages.map(page => <li
                                    key={page._id}
                                    className=" text-white 2xl:text-xl"><Link className="hover:underline 2xl:text-lg" to={page.pageUrl}>{page.pageTitle}</Link></li>)
                            }
                            
                        </ul>
                    </div>
                    {/* Third Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Services</h3>
                        <ul className="uppercase text-white page-list">
                            {
                                servicesPages.map(servicePage => <li
                                    key={servicePage._id}
                                    className=" text-white"><Link className="hover:underline 2xl:text-xl" to={servicePage.pageUrl}>{ servicePage.pageTitle}</Link></li>)
                            }
                            
                        </ul>
                    </div>
                    {/* Fourth Column */}
                    <div>
                        <ul className="page-list">
                            <li className="uppercase text-white "><Link className="flex items-center gap-2 2xl:text-xl" to="https://www.facebook.com/cubitoseofficial/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" style={{fill:"white"}} height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg> Facebook</Link></li>
                            
                            <li className="uppercase text-white "><Link className="flex items-center gap-2 2xl:text-xl" to="#"><svg xmlns="http://www.w3.org/2000/svg" style={{fill:"white"}} height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>Instagram</Link></li>
                            
                            <li className="uppercase text-white "><Link className="flex items-center gap-2 2xl:text-xl" to="#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:"white"}}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>Twitter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Copyright text */}
            <div className="w-10/12 lg:w-11/12 m-auto">
                <p className="text-white text-center text-sm 2xl:text-base">Copyright © 2023 Cubitose. All Rights Reserved. Made with ❤</p>
            </div>
        </footer>
    );
};

export default Footer;