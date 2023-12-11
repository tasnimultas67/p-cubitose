import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import {  motion } from 'framer-motion'
import {CursorArrowRaysIcon, PencilSquareIcon, HeartIcon, UserPlusIcon, UserGroupIcon, Squares2X2Icon, ChevronDownIcon, UserCircleIcon, BriefcaseIcon, ArrowRightOnRectangleIcon} from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
    const { user,signOutUser } = useContext(AuthContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleLogOut = () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("cubitose-access-token");
        navigate('/');
      })
      .then((error) => console.log(error));
  };

    return (
        <>
            <aside className='backdrop-blur-2xl bg-dashBg rounded-md p-3 shadow-md sticky top-0'>
                {/* User Info */}
          <div className='text-center pt-5 pb-5'>
            {user.photoURL ? <img className='bg-white h-16 w-auto rounded-full m-auto mb-5 ring-themeColor ring-2' src={user.photoURL} alt="User profile Photo" /> : <img className='bg-white h-16 w-auto rounded-full m-auto mb-5 ring-themeColor ring-2' src="/favicon.webp" alt="User profile Photo" />}
                    
            {user.displayName ? <h3 className='text-black font-semibold'>{ user.displayName}</h3>: <h3 className='text-black font-semibold'>Cubitose</h3>}
                    {user && <p className='text-gray-700 text-sm'>{ user.email}</p>}
                </div>
                {/* Sidebar Menu */}
                <div className='my-4 space-y-3'>
            <NavLink
              style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }} className="text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 rounded-md pl-3 pr-3.5 font-medium" to="/dashboard" end><Squares2X2Icon className='h-5 w-5'></Squares2X2Icon>Dashboard</NavLink>
                    {/* Teams Menus */}
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-black hover:bg-hoverLinkDash font-medium">
                                    <div className='flex items-center gap-3'><UserCircleIcon className='h-5 w-5'></UserCircleIcon>Teams</div>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-4 w-4 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="bg-activeDashBg py-4 mb-2 rounded-md space-y-3">
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }}
                            to="/dashboard/add-team"
                            className="text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><UserPlusIcon className='h-5 w-5'></UserPlusIcon> Add Team</NavLink>
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }}
                            to="/dashboard/manage-teams"
                            className=" text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><UserGroupIcon className='h-5 w-5'></UserGroupIcon> Manage Teams</NavLink>
                        
                      </Disclosure.Panel>
                    </>
                  )}
                    </Disclosure>
                    
                    {/* Portfolio Menus */}
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  text-black hover:bg-hoverLinkDash font-medium">
                                    <div className='flex items-center gap-3'><BriefcaseIcon className='h-5 w-5'></BriefcaseIcon>Portfolios</div>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-4 w-4 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="bg-activeDashBg py-4 mb-2 rounded-md space-y-3">
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }}
                            to="/dashboard/add-portfolio"
                            className="text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><CursorArrowRaysIcon className='h-5 w-5'></CursorArrowRaysIcon> Add Portfolio</NavLink>
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }}
                            to="/dashboard/manage-portfolio"
                            className="text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><PencilSquareIcon className='h-5 w-5'></PencilSquareIcon> Manage Portfolios</NavLink>
                        
                      </Disclosure.Panel>
                    </>
                  )}
                    </Disclosure>
            <NavLink
              style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#1954ed" : "",
                        boxShadow: isActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px": ""}
                }}
              className="text-black flex items-center gap-3 hover:bg-hoverLinkDash p-2 rounded-md pl-3 pr-3.5 font-medium"
               to="/dashboard/add-customer-review"><HeartIcon className='h-5 w-5'></HeartIcon>Add Review</NavLink>
                </div>
                <div className='border-t-2 py-5 '>
                    <button onClick={handleLogOut} className='hover:bg-themeColor py-2 hover:text-white flex items-center gap-3 w-full rounded-md pl-3 pr-3 text-sm font-medium text-black'><ArrowRightOnRectangleIcon className='h-5 w-5'></ArrowRightOnRectangleIcon> Log Out</button>
                </div>
        </aside>
        </>
    );
};

export default Sidebar;