import { Routes, Route, Navigate } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import SignIn from "../pages/Authentication/Login/SignIn";
import ApplicantSignIn from "../pages/Authentication/Login/ApplicantSignIn";
import EmployerSignIn from "../pages/Authentication/Login/EmployerSignIn";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                {/* Add nested routes here */}
                <Route path="/" element={<Home></Home>}></Route>
            </Route>

            <Route path="/signIn" element={<SignIn></SignIn>}>
                <Route
                    index
                    element={<Navigate to="applicant-signin" replace />}
                />
                <Route path="/signIn/applicant-signin" element={<ApplicantSignIn></ApplicantSignIn>}></Route>
                <Route path="employer-signIn" element={<EmployerSignIn></EmployerSignIn>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    )
}

export default AppRoutes
