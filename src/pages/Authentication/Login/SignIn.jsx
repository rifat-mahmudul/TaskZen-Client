import { NavLink, useLocation, useNavigate } from "react-router"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import toast from 'react-hot-toast';

const SignIn = () => {

    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            await navigate(from);
            toast.success("Log in successful!");
        } catch (error) {
            console.log(error);
        }
    }

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
                            onClick={handleGoogleSignIn}
                            className='border-2 border-white py-3 w-full mt-5 rounded-lg font-bold flex items-center justify-center space-x-2 disabled:cursor-not-allowed'>
                            <FcGoogle className='text-3xl' /> <span className="text-white">Continue With Google</span>
                        </button>
                    </div>
                </div>

        </section>
    )
}

export default SignIn
