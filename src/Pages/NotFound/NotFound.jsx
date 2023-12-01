import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <section className="bg-white  h-[100vh] flex justify-center items-center">
    <div className=" px-4 mx-auto lg:px-6">
        <div className="mx-auto text-center">
            
            <img className='md:w-[400px] 2xl:w-[600px] m-auto rounded-md notFoundImg shadow-xl' src="https://i.pinimg.com/originals/03/0d/84/030d8409ec091387e610d27a2b51e35b.jpg" alt="Not Found Image" srcSet="" />
            <p className="mb-4 mt-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, can't find that page. You'll find lots to explore on the home page. </p>
            <Link to="/" className="w-fit m-auto text-center justify-center group group-*  flex items-center text-sm relative leading-6 text-white uppercase bg-themeColor px-6 py-3 rounded-lg">Back to Homepage <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-white ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
        </div>   
    </div>
</section>
        </>
    );
};

export default NotFound;