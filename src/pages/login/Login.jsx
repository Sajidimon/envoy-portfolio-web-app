import { useContext, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const { logIn } = useContext(AuthContext);
    const [showpassword, setShowpassword] = useState(false);
    const [passworderr, setPassworderr] = useState(null)
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;

        //reset password error;
        setPassworderr(' ');

        //login user with email and password;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate('/dashboard')
                }

            }).catch(error => {
                if (error?.code === 'auth/invalid-credential') {
                    setPassworderr('Email & Password do not match !');
                    return;
                }
            })
       
    }

    return (
        <div className="mt-20 mx-10">
            <SectionTitle SectionTitle='Login to your account' />
            <div className="md:w-1/3 mx-auto">
                <div className="card border border-gray-200 rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email Address</span>
                            </label>
                            <input {...register("email")} type="email" name="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input {...register("password")}
                                type={showpassword ? "text" : "password"}
                                className="textarea textarea-bordered bg-white" required />
                            <span onClick={() => setShowpassword(!showpassword)} className="absolute top-[50px] right-3">
                                { showpassword ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {passworderr && <span className="text-red-500">{passworderr}</span>}
                    </form>
                </div>
                <p className="mt-5"><Link to='/signup'><span>Register</span></Link> | <Link><span>Lost your password?</span></Link></p>
            </div>
        </div>
    );
};

export default Login;