import { NavLink } from "react-router"
import DasNavItem from "./DasNavItem"
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const DashNav = () => {

    const [open, setIsOpen] = useState(false);

    const navItems = <>
        <div>
            <DasNavItem 
            setIsOpen={setIsOpen}
            address={'/dashboard/dash-home'} 
            navName={'HOME'} 
            icon={<FaHome></FaHome>}
            ></DasNavItem>
        </div>

        <div className="mt-1">
            <DasNavItem 
            setIsOpen={setIsOpen}
            address={'all-user'} 
            navName={'ALL USER'} 
            icon={<FaUsers></FaUsers>}
            >
            </DasNavItem>
        </div>
    
    </>



    return (
        <section className="lg:min-h-screen bg-emerald-500 text-white lg:px-5 lg:py-10 text-start">

                <div className="w-[90%] lg:w-full mx-auto flex items-center justify-between lg:block py-4 lg:py-0">
                    <NavLink to='/'>
                        <div className="text-center">
                            <h1 className='text-4xl font-Rancho font-bold'>Job<span className='text-gray-700'>ify</span></h1>
                        </div>
                    </NavLink>

                    <div className="mt-5 lg:text-lg hidden lg:block">
                        {navItems}
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
                    <div className='lg:hidden absolute top-16 right-0 min-h-screen shadow-lg p-4 rounded-lg w-[60%] sm:w-[30%] bg-emerald-500 ease-in-out duration-1000 text-white'>
                        <div>
                            <nav>
                                <ul className='flex flex-col text-center space-y-4 font-semibold'>
                                    {navItems}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    }

                </div>


        </section>
    )
}

export default DashNav
