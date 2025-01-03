import StepCard from "../shared/StepCard"
import Title from "../shared/Title"
import { FaRegUser } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { MdTravelExplore } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const JobsWork = () => {
    return (
        <section className="my-16 max-w-[90%] xl:max-w-[1200px] mx-auto">

            <div>
                <div>
                    <Title title={'How Expert Jobs Work'} desc={'Get your job done in 4 easy steps'}></Title>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 mt-10">
                    
                    <StepCard 
                    icon={<FaRegUser></FaRegUser>}
                    step={'Step 1'}
                    title={'Create a Account'}
                    desc={'Sign up and create your account for free'}
                    >
                    </StepCard>
                    
                    <StepCard 
                    icon={<SiReaddotcv></SiReaddotcv>}
                    step={'Step 2'}
                    title={'Upload your CV'}
                    desc={'Upload your CV and let the employers find you'}
                    >
                    </StepCard>
                    
                    <StepCard 
                    icon={<MdTravelExplore></MdTravelExplore>}
                    step={'Step 3'}
                    title={'Explore Jobs'}
                    desc={'Explore jobs, apply and get hired'}
                    >
                    </StepCard>
                    
                    <StepCard 
                    icon={<FaLocationArrow></FaLocationArrow>}
                    step={'Step 4'}
                    title={'Apply & Get Hired'}
                    desc={'Apply for jobs and get hired by employers'}
                    >
                    </StepCard>

                </div>
            </div>

        </section>
    )
}

export default JobsWork
