import { Link } from "react-router"
import { FcGoogle } from "react-icons/fc";

const ApplicantSignUp = () => {
    return (
        <div>
            <form>

                {/* name */}
                <div>
                    <h1 className="font-semibold text-xl text-white mb-2">Name</h1>
                    <input 
                    className="w-full p-3 outline-none rounded-lg border-2 border-green-700" 
                    type="text" 
                    placeholder="Enter Your Name"
                    />
                </div>

                {/* name */}
                <div className="mt-4">
                    <h1 className="font-semibold text-xl text-white mb-2">Upload Photo</h1>
                    <input 
                    className="w-full p-3 outline-none rounded-lg border-2 border-green-700" 
                    type="file" 
                    />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <h1 className="font-semibold text-xl text-white mb-2">Email</h1>
                    <input 
                    className="w-full p-3 outline-none rounded-lg border-2 border-green-700" 
                    type="email" 
                    placeholder="Enter Your Email"
                    />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <h1 className="font-semibold text-xl text-white mb-2">Password</h1>
                    <input 
                    className="w-full p-3 outline-none rounded-lg border-2 border-green-700" 
                    type="password" 
                    placeholder="Enter Password"
                    />
                </div>

                <button 
                type="submit"
                className="mt-6 py-3 px-5 w-full text-center  rounded-lg bg-emerald-700 text-xl text-white font-semibold">
                    Sign Up as an Applicant
                </button>

                <div>
                    <p className="mt-2 text-white">
                        <span>Already have an account ? please </span>
                        <Link to='/signIn'><span className="text-emerald-900 underline">Sign in</span></Link>
                    </p>
                </div>

            </form>

            
            <div className='flex items-center justify-center space-x-4 mt-5'>
                <div className='border border-gray-300 w-full'></div>
                    <div>
                        <h1>Or</h1>
                    </div>
                <div className='border border-gray-300 w-full'></div>
            </div>

            <button 
                className='border-2 border-white py-3 w-full mt-5 rounded-lg font-bold flex items-center justify-center space-x-2 disabled:cursor-not-allowed'>
                <FcGoogle className='text-3xl' /> <span className="text-white">Continue With Google</span>
            </button>
        </div>
    )
}

export default ApplicantSignUp
