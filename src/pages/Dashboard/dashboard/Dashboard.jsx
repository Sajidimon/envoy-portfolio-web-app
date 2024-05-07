import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaWordpress, FaNodeJs, FaHome } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { IoMdOptions } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { AuthContext } from '../../../provider/AuthProvider';

const Dashboard = () => {

    const { logout } = useContext(AuthContext);



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
                            <ul className="menu p-4 min-h-screen bg-[#2C3338] text-white">
                                {/* Sidebar content here */}
                                <li>
                                    <Link to='/'><FaHome /><button>Back to home</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><FaNodeJs /><button>Add node project</button></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/all-node-projects'><FaNodeJs /><button>All node project</button></Link>
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
                <div>
                    <Link to='/login'><button onClick={handleSignout} className='btn btn-sm mx-5 mt-3 bg-blue-800 text-white'><IoLogOut /> Logout</button></Link>
                </div>
            </div>
        </>
    );
};

export default Dashboard;