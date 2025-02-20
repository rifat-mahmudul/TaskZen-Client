
import { Outlet } from "react-router"
import HelmetTitle from "../../components/shared/HelmetTitle"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
  return (
    <section >

        <HelmetTitle title="Dashboard"></HelmetTitle>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

            <div className="lg:w-[22%] lg:h-screen py-2 lg:py-0 sticky top-0 z-50 backdrop-blur-lg lg:overflow-auto">
                <DashNav></DashNav>
            </div>

            <div className="lg:w-[85%] pr-0 lg:pr-5 w-[90%] mx-auto lg:py-10 pb-10 ">
                <Outlet></Outlet>
            </div>

        </div>
        
    </section>
  )
}

export default Dashboard
