import { useContext, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const { user, logIn } = useContext(AuthContext);
    const [showpassword, setShowpassword] = useState(false);
    const [emailerror, setEmailerror] = useState(null)
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;


        //reset email error;
        setEmailerror(' ');

        //existing email & password validation;

        if (user.email !== email) {
            setEmailerror('Email & password do not match ! ');
            return;
        }

        //login user with email and password;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login is successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard')
                }

        }).catch(error=>console.log(error))
       
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
                            {emailerror && <span className="text-red-500">{emailerror}</span>}
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
                    </form>
                </div>
                <p className="mt-5"><Link to='/signup'><span>Register</span></Link> | <Link><span>Lost your password?</span></Link></p>
            </div>
        </div>
    );
};

export default Login;