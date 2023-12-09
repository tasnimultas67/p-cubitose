import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-5 mt-3 gap-4'>
                <div className=''>
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