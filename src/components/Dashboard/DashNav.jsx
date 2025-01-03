import { NavLink } from "react-router"
import DasNavItem from "./DasNavItem"
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const DashNav = () => {

    const navItems = <>
        <div className="">
            <DasNavItem 
            address={'/dashboard/dash-home'} 
            navName={'HOME'} 
            icon={<FaHome></FaHome>}
            ></DasNavItem>
        </div>

        <div className="flex items-center space-x-1 mt-2">
            <DasNavItem 
            address={'all-user'} 
            navName={'ALL USER'} 
            icon={<FaUsers></FaUsers>}
            >
            </DasNavItem>
        </div>
    
    </>



    return (
        <section className="min-h-screen bg-emerald-500 text-white px-5 py-10 text-start">

                <NavLink to='/'>
                    <div className="text-center">
                        <h1 className='text-4xl font-Rancho font-bold'>Job<span className='text-gray-700'>ify</span></h1>
                    </div>
                </NavLink>

                <div className="mt-5 lg:text-xl">
                    {navItems}
                </div>


        </section>
    )
}

export default DashNav
