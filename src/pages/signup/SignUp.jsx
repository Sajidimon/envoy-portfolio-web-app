import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const SignUp = () => {
    return (
        <div className="mt-10 mx-10">
            <SectionTitle SectionTitle='Create your account' />
            <div className="md:w-1/3 mx-auto">
                <div className="card border border-gray-200 rounded">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Username</span>
                            </label>
                            <input type="text" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email Address</span>
                            </label>
                            <input type="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                </div>
                <p className="mt-5"><Link to='/login'><span>Login</span></Link> | <Link to='/'><span>Back to the site ?</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;