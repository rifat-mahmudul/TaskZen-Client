
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
                className="mt-4 py-3 px-5 w-full text-center  rounded-lg bg-emerald-700 text-xl text-white font-semibold">
                    Sign Up as an Applicant
                </button>

            </form>
        </div>
    )
}

export default ApplicantSignUp
