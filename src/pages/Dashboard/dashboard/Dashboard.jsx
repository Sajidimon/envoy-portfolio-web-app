import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaWordpress, FaNodeJs, FaHome } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { IoMdOptions } from "react-icons/io";

const Dashboard = () => {
    return (
        <>
            <div className='flex'>
                <div>
                    <div className="drawer h-full drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 min-h-screen bg-[#2C3338] text-white">
                                {/* Sidebar content here */}
                                <li>
                                    <Link to='/'><FaHome/><button>Back to home</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><FaNodeJs/><button>Add node project</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/wp-project'><FaWordpress /><button>Add wp project</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/seo-project'><TbSeo /><button>Add seo project</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/theme-option'><IoMdOptions /><button>Theme option</button></Link>
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