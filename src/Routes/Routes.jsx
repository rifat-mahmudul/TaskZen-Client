import { Routes, Route, Navigate } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import SignIn from "../pages/Authentication/Login/SignIn";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                {/* Add nested routes here */}
                <Route path="/" element={<Home></Home>}></Route>
            </Route>

            <Route path="/signIn" element={<SignIn></SignIn>}></Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    )
}

export default AppRoutes
