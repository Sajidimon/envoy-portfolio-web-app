import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from '../../assets/sajidimon.jpg';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="bg-[#3A1F54]">
            <div className="navbar bg-[#3A1F54] container mx-auto">
                <div className="flex-1">
                    <img src={logo} className="rounded-3xl w-[40px]" alt="" />
                    <Link to='/'>
                    <a className="btn btn-ghost text-xl text-white">Imon</a>
                    </Link>
                </div>
                <div className="flex">
                    <button className="btn btn-lg gap-6 bg-[#3A1F54] border-none text-white">
                        <a href="https://www.facebook.com/sajidchowdhuryimon" target="_blank"><span><FaFacebook></FaFacebook></span></a>
                        <a href="https://www.linkedin.com/in/sajidimon" target="_blank"><span><FaLinkedin></FaLinkedin></span></a>
                        <a href="https://github.com/sajidimon" target="_blank"><span><FaGithub></FaGithub></span></a>
                        <a className="max-sm:hidden" href="https://www.youtube.com/skillgori" target="_blank"><span><FaYoutube></FaYoutube></span></a>
                    </button>
                    <Link to='/login'><button className="px-4 py-1 rounded-lg bg-violet-500 text-black max-sm:btn-sm">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;