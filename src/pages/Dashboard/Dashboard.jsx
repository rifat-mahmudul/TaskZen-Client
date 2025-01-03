import { Outlet } from "react-router"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
    return (
        <section>
            <div className="flex gap-16">
                <div className="lg:w-[15%]">
                    <DashNav></DashNav>
                </div>

                <div className="py-14">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
