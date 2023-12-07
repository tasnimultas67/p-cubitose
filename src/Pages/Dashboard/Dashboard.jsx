import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='sticky top-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>  
        </>
    );
};

export default Dashboard;