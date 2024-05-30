import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaWordpress, FaNodeJs, FaHome, FaUser, FaUserCircle, FaCode, FaUsers } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { IoMdOptions } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { AuthContext } from '../../../provider/AuthProvider';
import './dashboard.css'

const Dashboard = () => {

    const { logout } = useContext(AuthContext);
    const [showSubmenu1, setShowSubmenu1] = useState(false);
    const [showSubmenu2, setShowSubmenu2] = useState(false);
    const [showSubmenu3, setShowSubmenu3] = useState(false);

    const toggleSubmenu1 = () => {
        setShowSubmenu1(!showSubmenu1);
    };

    const toggleSubmenu2 = () => {
        setShowSubmenu2(!showSubmenu2);
    };

    const toggleSubmenu3 = () => {
        setShowSubmenu3(!showSubmenu3);
    };

    //logout user;

    const handleSignout = () => {
        logout()
            .then(() => {
            }).catch((error) => error)
    }


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
                            {/* Sidebar content here */}
                            <ul className="menu min-h-screen bg-[#2C3338] text-white">
                                <li>
                                    <Link to='/'><FaHome /><button>Back to home</button></Link>
                                </li>
                                <li className="menu-item" onClick={toggleSubmenu1}>
                                    <button><FaCode/> Codding Project</button>
                                    {showSubmenu1 && (
                                        <ul className="submenu">
                                            <li>
                                                <Link to='/dashboard/all-node-projects'><FaNodeJs /><button>All Projects</button></Link>
                                            </li>
                                            <li>
                                                <Link to='/dashboard'><FaNodeJs /><button>Add New Project</button></Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="menu-item" onClick={toggleSubmenu2}>
                                    <button><FaWordpress /> WordPress Project</button>
                                    {showSubmenu2 && (
                                        <ul className="submenu">
                                            <li>
                                                <Link to='/dashboard/wp-project'><FaWordpress /><button>All Projects</button></Link>
                                            </li>
                                            <li>
                                                <Link to='/dashboard/wp-project'><FaWordpress /><button>Add New Project</button></Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="menu-item" onClick={toggleSubmenu3}>
                                    <button><TbSeo /> SEO Project</button>
                                    {showSubmenu3 && (
                                        <ul className="submenu">
                                            <li>
                                                <Link to='/dashboard/seo-project'><TbSeo /><button>All Projects</button></Link>
                                            </li>
                                            <li>
                                                <Link to='/dashboard/seo-project'><FaWordpress /><button>Add New Project</button></Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link to='/dashboard/theme-option'><IoMdOptions /><button>Theme Options</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* dashboard content here */}
                <div className="p-8 block mx-auto w-2/3">
                    <Outlet></Outlet>
                </div>
                <div>
                    <Link to='/login'><button onClick={handleSignout} className='btn btn-sm mx-5 mt-3 bg-blue-800 text-white'><IoLogOut /> Logout</button></Link>
                </div>
            </div>
        </>
    );
};

export default Dashboard;