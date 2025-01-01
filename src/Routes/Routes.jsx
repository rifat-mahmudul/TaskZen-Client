import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import UserLogIn from "../pages/Authentication/Login/UserLogin";
import BuyerLogIn from "../pages/Authentication/Login/BuyerLogIn";
import Error from "../pages/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                {/* Add nested routes here */}
                <Route path="/" element={<Home></Home>}></Route>
            </Route>

            <Route path="/user-login" element={<UserLogIn></UserLogIn>}></Route>
            <Route path="/buyer-login" element={<BuyerLogIn></BuyerLogIn>}></Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    )
}

export default AppRoutes
