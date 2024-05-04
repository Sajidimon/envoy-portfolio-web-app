import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaWordpress, FaNodeJs } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <div className='flex'>
                <div>
                    <div className="drawer h-full drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 min-h-screen bg-base-200 text-white">
                                {/* Sidebar content here */}
                                <li>
                                    <Link to='/dashboard/express-project'><FaNodeJs/><button>Add Node Project</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/wp-project'><FaWordpress /><button>Add WP Project</button></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* dashboard content here */}
                <div className="p-8 block mx-auto w-1/2">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;