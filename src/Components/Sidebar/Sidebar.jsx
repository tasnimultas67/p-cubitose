import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import {CursorArrowRaysIcon, PencilSquareIcon, HeartIcon, UserPlusIcon, UserGroupIcon, Squares2X2Icon, ChevronDownIcon, UserCircleIcon, BriefcaseIcon, ArrowRightOnRectangleIcon} from "@heroicons/react/24/outline";
import { Link, NavLink} from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
    const { user,signOutUser } = useContext(AuthContext)
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <aside className='bg-white rounded-md p-3 ml-3 mb-3 shadow'>
                {/* User Info */}
                <div className='text-center pt-5 pb-5'>
                    <img className='bg-white h-20 w-auto rounded-full m-auto mb-5 ring-themeColor ring-2' src="/favicon.webp" alt="User profile Photo" />
                    <h3 className='text-black font-semibold'>Cubitose</h3>
                    {user && <p className='text-gray-700 text-sm'>{ user.email}</p>}
                </div>
                {/* Sidebar Menu */}
                <div className='my-4 space-y-3'>
                    <NavLink style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md pl-3 pr-3.5 font-medium" to="/dashboard" end><Squares2X2Icon className='h-5 w-5'></Squares2X2Icon>Dashboard</NavLink>
                    {/* Teams Menus */}
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-gray-900 hover:bg-gray-50 font-medium">
                                    <div className='flex items-center gap-3'><UserCircleIcon className='h-5 w-5'></UserCircleIcon>Teams</div>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-4 w-4 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="bg-gray-50 py-4 mb-2 rounded-md space-y-3">
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }}
                            to="/dashboard/add-team"
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><UserPlusIcon className='h-5 w-5'></UserPlusIcon> Add Team</NavLink>
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }}
                            to="/dashboard/manage-teams"
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><UserGroupIcon className='h-5 w-5'></UserGroupIcon> Manage Teams</NavLink>
                        
                      </Disclosure.Panel>
                    </>
                  )}
                    </Disclosure>
                    
                    {/* Portfolio Menus */}
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  text-gray-900 hover:bg-gray-50 font-medium">
                                    <div className='flex items-center gap-3'><BriefcaseIcon className='h-5 w-5'></BriefcaseIcon>Portfolios</div>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-4 w-4 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="bg-gray-50 py-4 mb-2 rounded-md space-y-3">
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }}
                            to="/dashboard/add-portfolio"
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><CursorArrowRaysIcon className='h-5 w-5'></CursorArrowRaysIcon> Add Portfolio</NavLink>
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }}
                            to="/dashboard/manage-portfolio"
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 pl-6 rounded-md pr-3.5 font-medium text-sm"
                          ><PencilSquareIcon className='h-5 w-5'></PencilSquareIcon> Manage Portfolios</NavLink>
                        
                      </Disclosure.Panel>
                    </>
                  )}
                    </Disclosure>
            <NavLink
              style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#1954ed" : ""}
                }}
              className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md pl-3 pr-3.5 font-medium"
               to="/dashboard/add-customer-review"><HeartIcon className='h-5 w-5'></HeartIcon>Add Review</NavLink>
                </div>
                <div className='border-t-2 py-5 '>
                    <button onClick={signOutUser} className='hover:bg-themeColor py-2 hover:text-white flex items-center gap-3 w-full rounded-md pl-3 pr-3 text-sm font-medium'><ArrowRightOnRectangleIcon className='h-5 w-5'></ArrowRightOnRectangleIcon> Log Out</button>
                </div>
            </aside>

        </>
    );
};

export default Sidebar;