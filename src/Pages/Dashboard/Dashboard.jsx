import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className='bg-image p-4 min-h-screen'>
                <div className='grid grid-cols-5 gap-4'>
                    <div className='relative top-0'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-span-4'>
                        <Outlet></Outlet>
                    </div>
                </div> 
            </div> 
        </>
    );
};

export default Dashboard;