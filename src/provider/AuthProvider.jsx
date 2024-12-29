import { createContext } from "react"
import propTypes from 'prop-types';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
}


export default AuthProvider
