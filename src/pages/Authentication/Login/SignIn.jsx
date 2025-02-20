import { NavLink } from "react-router"
import img1 from '../../../assets/job-applicant.png';
import img2 from '../../../assets/employers.png';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-emerald-500 via-emerald-100 to-emerald-50">    

                <div className='w-[90%] lg:w-[45%] bg-emerald-500 p-2 sm:p-10 rounded-lg shadow-lg'>

                    <NavLink to='/'>
                        <div className="text-center mb-4">
                            <h1 className='text-5xl text-white font-Rancho font-bold'>Task<span className='text-gray-700'>Zen</span></h1>
                        </div>
                    </NavLink>

                    <div className='mt-3'>
                        <button 
                            className='border-2 border-white py-3 w-full mt-5 rounded-lg font-bold flex items-center justify-center space-x-2 disabled:cursor-not-allowed'>
                            <FcGoogle className='text-3xl' /> <span className="text-white">Continue With Google</span>
                        </button>
                    </div>
                </div>

        </section>
    )
}

export default SignIn
