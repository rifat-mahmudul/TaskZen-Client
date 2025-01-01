import { NavLink } from "react-router"
import PropTypes from 'prop-types'

const NavItem = ({address, navName, setIsOpen}) => {
    return (
        <NavLink
        onClick={() => setIsOpen(false)}
        className={({isActive}) => (isActive ? 'font-bold text-emerald-500' : ' hover:text-emerald-500')} 
        to={address}>
            {navName}
        </NavLink>
    )
}

NavItem.propTypes = {
    address: PropTypes.string,
    navName: PropTypes.string,
    setIsOpen: PropTypes.func
}

export default NavItem
