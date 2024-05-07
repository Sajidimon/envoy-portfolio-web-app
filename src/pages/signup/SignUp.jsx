import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { saveuser } from "../../api/auth";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [passworderr, setPassworderr] = useState(null)
    const [emailerr, setEmailerr] = useState(null)
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const email = data.email;

        //reset password error;
        setPassworderr(' ');
        setEmailerr(' ');


        //existing email validation;

        // if (user?.email == email) {
        //     setEmailerr('Email is already exist!');
        //     return;
        // }

        //password validation;
        const password = data.password;
        if (password.length < 6) {
            setPassworderr('Password must be minimum 6 character or more')
            return;
        } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) ) {
            setPassworderr('Password must contain at least one uppercase and one lowercase letter')
            return;
        }

        //create user with email and password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                saveuser(user);
                console.log(user)
                reset();
                navigate('/dashboard');
            })
            .catch(error => {
                if (error?.code === 'auth/email-already-in-use')
                    setEmailerr('Email is already exist')
            })

    }

    return (
        <div className="mt-10 mx-10">
            <SectionTitle SectionTitle='Create your account' />
            <div className="md:w-1/3 mx-auto">
                <div className="card border border-gray-200 rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Username</span>
                            </label>
                            <input {...register("username")} name="username" type="text" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email Address</span>
                            </label>
                            <input {...register("email")} type="email" name="email" className="input input-bordered bg-white" required />
                            {emailerr && <span className="text-red-500">{emailerr}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input {...register("password")} type="password" name="password" className="input input-bordered bg-white" required />
                            {passworderr && <span className="text-red-500">{ passworderr}</span>}
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