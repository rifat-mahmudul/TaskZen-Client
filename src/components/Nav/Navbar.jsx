import {Link, NavLink} from 'react-router';
import { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [open, setIsOpen] = useState(false);

    return (
        <header className='sticky top-0 backdrop-blur-lg z-50 bg-emerald-50'>
            
            <div className='max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center py-3'>

                <NavLink to='/'>
                    <div>
                        <h1 className='text-4xl font-Rancho font-bold'>Job<span className='text-emerald-500'>ify</span></h1>
                    </div>
                </NavLink>

                <div className='hidden lg:flex space-x-4'>
                    <Link to='/signIn'>
                        <button className='border-2 font-semibold text-gray-600 hover:bg-emerald-500 hover:text-white border-emerald-500 py-2 px-5 rounded-lg transition'>Sign In</button>
                    </Link>
                </div>

                <div className='lg:hidden'>
                    <button className='text-2xl font-bold' onClick={() => setIsOpen(!open)}>
                        { open ?
                            <RxCross2 />
                            :
                            <RiMenu3Fill/>
                        }
                    </button>
                </div>

                { open && 
                    <div className='lg:hidden absolute top-14 right-2 bg-white shadow-lg p-4 rounded-lg w-3/4 bg-gradient-to-t from-emerald-500 via-white to-white ease-in-out duration-1000'>
                        <div>
                            <nav>
                                <ul className='flex flex-col text-center space-y-4 font-semibold text-gray-600'>
                                {navItems}
                                </ul>
                            </nav>
                        </div>

                        <div className='flex flex-col text-center space-y-4 mt-4'>
                            <Link to='/signIn'>
                                <button className='border-2 font-semibold text-gray-600 hover:bg-emerald-500 hover:text-white border-emerald-500 py-2 px-5 rounded-lg transition'>Sign In</button>
                            </Link>
                        </div>
                    </div>
                }
            </div>

        </header>
    )
}

export default Navbar
