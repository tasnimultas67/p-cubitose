import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import {CursorArrowRaysIcon, PencilSquareIcon, HeartIcon} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
const menus = [
    {name: "Add Portfolio", href: "/dashboard/add-portfolio", icon: CursorArrowRaysIcon},
    {name: "Manage Portfolio", href: "/dashboard/manage-portfolio", icon: PencilSquareIcon},
    {name: "Add Review", href: "/dashboard/add-customer-review", icon: HeartIcon},
]
const Sidebar = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <aside className='bg-themeColor p-3 h-full'>
                {/* User Info */}
                <div className='text-center'>
                    <img className='bg-white h-20 w-auto rounded-full m-auto mb-5' src="/favicon.webp" alt="User profile Photo" />
                    <h3 className='text-white font-semibold'>Cubitose</h3>
                    {user && <p className='text-gray-200'>{ user.email}</p>}
                </div>
                {/* Sidebar Menu */}
                <div className='my-4'>
                    {
                        menus.map(item => <div className='text-white font-medium' key={item.name}>
                            <Link className='flex items-center gap-3 hover:bg-white/20 p-2 rounded-md' to={item.href}><item.icon className='h-5 w-5 text-white'></item.icon> { item.name}</Link>
                    </div>)
                    }
                </div>
            </aside>

        </>
    );
};

export default Sidebar;