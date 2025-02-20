import { Routes, Route, Navigate } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import SignIn from "../pages/Authentication/Login/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../pages/Dashboard/AddTask";
import MyTasks from "../pages/Dashboard/MyTasks";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                {/* Add nested routes here */}
                <Route path="/" element={<Home></Home>}></Route>
            </Route>

            <Route path="/signIn" element={<SignIn></SignIn>}></Route>

            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            
                <Route
                index
                element={<Navigate to="add-task" replace />}
                />

                <Route path="/dashboard/add-task" element={<PrivateRoute><AddTask></AddTask></PrivateRoute>}></Route>

                <Route path="/dashboard/my-tasks" element={<PrivateRoute><MyTasks></MyTasks></PrivateRoute>}></Route>
            
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    )
}

export default AppRoutes
