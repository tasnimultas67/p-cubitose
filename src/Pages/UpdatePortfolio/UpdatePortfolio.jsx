import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import {useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePortfolio = () => {
    const portfolio = useLoaderData()
    const {_id, portfolioName, portfolioDetails, portfolioThumbnail, portfolioLink, portfolioCategory, portfolioYear, portfolioCountry, portfolioClientName, portfolioServiceCategory, portfolioShortDescription } = portfolio

    const navigate = useNavigate()
    const editor = useRef(null);
    const from = "/dashboard/manage-portfolio"
    const [content, setContent] = useState();

        const handleUpdatePortfolio = e => {
        e.preventDefault()
        const form = e.target;
        const portfolioName = form.portfolio_name.value;
        const portfolioDetails = content;
        const portfolioThumbnail = form.portfolio_thumbnail.value;
        const portfolioLink = form.portfolio_link.value;
        const portfolioCategory = form.portfolio_category.value;
        const portfolioYear = form.portfolio_year.value;
        const portfolioCountry = form.portfolio_country.value;
        const portfolioClientName = form.client_name.value;
        const portfolioServiceCategory = form.service_category.value;
        const portfolioShortDescription = form.portfolio_shortDescription.value;

        const updatePortfolioInfo = { portfolioName, portfolioDetails, portfolioThumbnail, portfolioLink, portfolioCategory, portfolioYear, portfolioCountry, portfolioClientName, portfolioServiceCategory,portfolioShortDescription }
        
        fetch(`https://cubitose-backend-production.up.railway.app/portfolio/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatePortfolioInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                    'Good job!',
                    `Successfully Updated ${portfolioName} portfolio`,
                    'success'
                    )
                    form.reset()
                    setContent('')
                    navigate(from, { replace: true })
                }
                
        })

    }
    
    
    return (
        <div className="bg-gray-200 rounded-md mr-3 p-5">
            <div className="">
                <div className="flex min-h-full flex-1 flex-col justify-center">

                    <div className="">
                        <form onSubmit={handleUpdatePortfolio} className="space-y-6" method="PUT">
                            {/* Add Portoflio Title*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    Portfolio Name
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="portfolio-name"
                                    name="portfolio_name"
                                        type="text"
                                        placeholder='example: Cubitose Limited'
                                        defaultValue={portfolioName}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-7">
                                {/* Portfolio Details Editor */}
                                <div className="col-span-3">
                                    {/* Portfolio ShortDescription */}
                                    <div className=''>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Short Description
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-shortDescription"
                                            name="portfolio_shortDescription"
                                                type="text"
                                                defaultValue={portfolioShortDescription}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Editor */}
                                    <label>Portfolio Details</label>
                                    <JoditEditor
                                        className='mt-2'
                                        ref={editor}
                                        defaultValue={portfolioDetails}
                                        tabIndex={1}
                                        onBlur={newContent => setContent(newContent)}
                                    />
                                </div>
                                <div className='space-y-3 sticky top-0 right-0'>
                                    {/* Portfolio Thumnail */}
                                    <div className=''>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Thumbnail
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-thumbnail"
                                            name="portfolio_thumbnail"
                                                type="text"
                                                defaultValue={portfolioThumbnail}
                                                placeholder='example: www.img.com/imgLink'
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                        <p className='text-xs italic mt-1 text-gray-500'>Before giving the picture link, you must upload the picture optimized</p>
                                    </div>
                                    {/* Portfolioi Link */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Link
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-link"
                                            name="portfolio_link"
                                                type="text"
                                                defaultValue={portfolioLink}
                                                placeholder='example: www.cubitose.com'
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Portfolio Category */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Category
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-category"
                                            name="portfolio_category"
                                                type="text"
                                                defaultValue={portfolioCategory}
                                                placeholder='example - e-commerce'
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Portfolio Date */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Year
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-year"
                                                name="portfolio_year"
                                                placeholder='exaple: 2023'
                                                type="text"
                                                defaultValue={portfolioYear}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Portfolio Country */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Portfolio Country
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="portfolio-country"
                                                name="portfolio_country"
                                                placeholder='example: Bangladesh'
                                                defaultValue={portfolioCountry}
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Client Name */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                            Client Name
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                            id="client-name"
                                            name="client_name"
                                                type="text"
                                                defaultValue={portfolioClientName}
                                                placeholder='exaple: John Doe'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                    {/* Project Role */}
                                    <div>
                                        <label htmlFor="project-role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Category</label>
                                        <select id="project-role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name="service_category" required defaultValue={portfolioServiceCategory}>
                                            <option>Select</option>
                                            <option defaultValue="Web-Development">Web Development</option>
                                            <option defaultValue="Web-Design">Web Design</option>
                                            <option defaultValue="Graphics-Design">Graphics Design</option>
                                            <option defaultValue="Digital-Marketing">Digital Marketing</option>
                                        </select>
                                    </div>
                                    {/* Update Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-themeColor px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeColor mt-7"
                                        >
                                            Update Portfolio
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePortfolio;