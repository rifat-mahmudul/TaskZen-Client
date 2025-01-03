import { Outlet } from "react-router"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
    return (
        <section>
            <div className="flex flex-col lg:flex-row lg:gap-3">
                <div className="lg:w-[18%]">
                    <DashNav></DashNav>
                </div>

                <div className="lg:py-14 mt-5 lg:mt-0 w-[90%] lg:w-[1000px] mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
