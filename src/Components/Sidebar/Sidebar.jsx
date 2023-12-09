import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import {CursorArrowRaysIcon, PencilSquareIcon, HeartIcon, UserPlusIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
const menus = [
    {name: "Add Team", href: "/dashboard/add-team", icon: UserPlusIcon},
    {name: "Manage Teams", href: "/dashboard/manage-teams", icon: UserGroupIcon},
    {name: "Add Portfolio", href: "/dashboard/add-portfolio", icon: CursorArrowRaysIcon},
    {name: "Manage Portfolio", href: "/dashboard/manage-portfolio", icon: PencilSquareIcon},
    {name: "Add Review", href: "/dashboard/add-customer-review", icon: HeartIcon},
]
const Sidebar = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <aside className='bg-gray-200 rounded-md p-3 ml-3 mb-3'>
                {/* User Info */}
                <div className='text-center pt-5'>
                    <img className='bg-white h-20 w-auto rounded-full m-auto mb-5 ring-themeColor ring-2' src="/favicon.webp" alt="User profile Photo" />
                    <h3 className='text-black font-semibold'>Cubitose</h3>
                    {user && <p className='text-gray-700'>{ user.email}</p>}
                </div>
                {/* Sidebar Menu */}
                <div className='my-4'>
                    {
                        menus.map(item => <div className='text-black font-medium' key={item.name}>
                            <Link className='flex items-center gap-3 hover:bg-white/20 p-2 rounded-md' to={item.href}><item.icon className='h-5 w-5 text-black'></item.icon> { item.name}</Link>
                    </div>)
                    }
                </div>
            </aside>

        </>
    );
};

export default Sidebar;