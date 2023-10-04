import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { login } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        login(email, password)
            .then(res => {
                console.log(res.user)

                // navigate after login 
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => console.error(error))
    }




    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-4xl font-semibold pt-32 mb-16">LogIn Form</h2>

            <form onSubmit={handleLogin}>
                <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl'>

                    {/* email field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="email" placeholder='email' required />
                    </div>
                    {/* password field  */}
                    <div>
                        <label htmlFor="">Password</label><br />
                        <div className='flex relative'>
                            <input className='border w-full rounded-md p-2 my-2' type={showPassword ? 'text' : 'password'} name="password" placeholder='password' required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 text-xl" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn bg-[#4A07DA] text-white w-full p-2 rounded-lg" />

                    <p className='mt-2'>New Here ? Please  <Link to='/register'>
                        <span className='text-blue-600'>
                            <span className='underline'>Register</span>
                        </span>
                    </Link>

                    </p>

                </div>

            </form>


        </div>
    );
};

export default Login;