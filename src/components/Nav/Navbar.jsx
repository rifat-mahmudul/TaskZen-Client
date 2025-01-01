import {Link, NavLink} from 'react-router';
import NavItem from './NavItem';
import { useState } from 'react';

const Navbar = () => {

    const [open, setIsOpen] = useState(false);

    const navItems = <>
        <NavItem setIsOpen={setIsOpen} address={'/'} navName={'Home'}></NavItem>
        <NavItem setIsOpen={setIsOpen} address={'/all-jobs'} navName={'All Jobs'}></NavItem>
        <NavItem setIsOpen={setIsOpen} address={'/dashboard'} navName={'Dashboard'}></NavItem>
    </>

    return (
        <header>
            
            <div className='max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center py-3 sticky top-0 backdrop-blur-lg z-50'>

                <NavLink to='/'>
                    <div>
                        <h1 className='text-4xl font-Rancho font-bold'>Job<span className='text-emerald-500'>ify</span></h1>
                    </div>
                </NavLink>

                <div>
                    <nav>
                        <ul className='flex items-center space-x-4 font-semibold text-gray-600'>
                            {navItems}
                        </ul>
                    </nav>
                </div>

                <div className='flex space-x-4'>
                    <Link to='/signIn'>
                        <button className='border-2 font-semibold text-gray-600 hover:bg-emerald-500 hover:text-white border-emerald-500 py-2 px-5 rounded-lg transition'>Sign In</button>
                    </Link>
                    
                    <Link to='/signUp'>
                        <button className='font-semibold bg-emerald-500 text-white py-2 px-5 rounded-lg transition hover:bg-emerald-600'>Sign Up</button>   
                    </Link>
                </div>
            </div>

        </header>
    )
}

export default Navbar
