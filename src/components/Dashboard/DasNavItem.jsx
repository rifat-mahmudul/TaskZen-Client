import { NavLink } from "react-router"
import PropTypes from 'prop-types'

const DasNavItem = ({address, navName, setIsOpen, icon}) => {
    return (
        <div>
            <NavLink
            onClick={() => setIsOpen(false)}
            className={({isActive}) => (isActive ? 'font-bold flex items-center space-x-1 text-pink-700' : 'font-bold flex items-center space-x-1')} 
            to={address}
            >
                <h1>{icon}</h1>
                <h1>{navName}</h1>
            </NavLink>
        </div>
    )
}

DasNavItem.propTypes = {
    address: PropTypes.string,
    navName: PropTypes.string,
    setIsOpen: PropTypes.func,
    icon : PropTypes.element
}

export default DasNavItem
