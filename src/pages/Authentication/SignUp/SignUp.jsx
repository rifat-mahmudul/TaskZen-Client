import img1 from '../../../assets/job-applicant.png';
import img2 from '../../../assets/employers.png';
import { NavLink, Outlet } from 'react-router';

const SignUp = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-emerald-500 via-emerald-100 to-emerald-50 py-16">    

                <div className='w-[90%] lg:w-[45%] bg-emerald-500 p-2 sm:p-10 rounded-lg shadow-lg'>
                    <h1 className='text-center font-extrabold text-3xl mb-5 text-white'>Sign Up</h1>

                    <div className='flex justify-between items-center border border-gray-400 rounded-full bg-emerald-200'>

                        <NavLink 
                        to={'/signUp/applicant-signup'}
                        className={({isActive}) => (isActive ? 'border w-1/2 border-emerald-600 p-8 bg-emerald-400 rounded-full' : ' hover:bg-emerald-400 p-8 rounded-full w-1/2')}
                        >
                            <div>
                                <img className='h-20 sm:h-40 w-full' src={img1} alt="" />
                                <h1 className='text-center font-semibold mt-4 text-xl text-gray-700'>Applicant</h1>
                            </div>
                        </NavLink>

                        <NavLink 
                        to={'employer-signup'}
                        className={({isActive}) => (isActive ? 'border w-1/2 border-emerald-600 p-8 bg-emerald-400 rounded-full' : ' hover:bg-emerald-400 p-8 rounded-full w-1/2')}
                        >
                            <div>
                                <img className='h-20 sm:h-40 w-full' src={img2} alt="" />
                                <h1 className='text-center font-semibold mt-4 text-xl text-gray-700'>Employer</h1>
                            </div>
                        </NavLink>

                    </div>

                    <div className='mt-3'>
                        <Outlet></Outlet>
                    </div>
                </div>

        </section>
    )
}

export default SignUp
