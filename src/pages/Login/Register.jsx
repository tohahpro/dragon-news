import { Link } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)


    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password);


        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => console.error(error))
    }




    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-4xl font-semibold pt-32 mb-16">Register Form</h2>

            <form onSubmit={handleRegister}>
                <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl'>

                    {/* Name field  */}
                    <div>
                        <label htmlFor="">Your Name</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="name" placeholder='name' required />
                    </div>
                    {/* email field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="email" placeholder='email' required />
                    </div>
                    {/* Photo field  */}
                    <div>
                        <label htmlFor="">Photo URL</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="photo" placeholder='Photo URL' required />
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

                    <p className='mt-2'>Already have account ? Please  <Link to='/login'>
                        <span className='text-blue-600'>
                            <span className='underline'>Login</span>
                        </span>
                    </Link>

                    </p>

                </div>

            </form>


        </div>
    );
};

export default Register;