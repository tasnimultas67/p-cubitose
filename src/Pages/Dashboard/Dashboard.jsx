import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-5 m-4 gap-4 bg-cover'>
                <div className='relative top-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-4'>
                    <Outlet></Outlet>
                </div>
            </div>  
        </>
    );
};

export default Dashboard;