import FaqQuestion from "../Shared/FaqQuestion"
import Title from "../shared/Title"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Faq = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="pb-24 pt-8">
            
            <Title title='Frequently Asked Questions'></Title>

            <div  className="max-w-[90%] xl:max-w-[1200px] mx-auto overflow-hidden">

                <div data-aos="fade-left" data-aos-duration="2000" className="p-5 bg-[#50daa736] mt-10 rounded-lg overflow-hidden">

                    <div data-aos="fade-left" data-aos-duration="3000" className="bg-[#50daa769] p-5 rounded-lg">

                        <FaqQuestion
                        question='How do I create an account on the job portal?'
                        ans='To create an account, click on the "Sign Up" button on the homepage. Choose whether you’re an applicant or an employer, fill in the required details, and submit the form. You will receive a confirmation email to verify your account.'
                        >
                        </FaqQuestion>

                        <div className="pt-4">
                            <FaqQuestion
                            question='Can I apply for jobs without registering?'
                            ans='No, registration is required to apply for jobs. Creating an account helps you track your applications and receive job recommendations based on your profile.'
                            >
                            </FaqQuestion>
                        </div>

                        <div className="pt-4">
                            <FaqQuestion
                            question='How can I search for jobs?'
                            ans='Use the search bar on the homepage. Enter keywords like job title, skills, or location. You can also use advanced filters to narrow your search by salary, industry, or experience level.'
                            >
                            </FaqQuestion>
                        </div>

                        <div className="pt-4">
                            <FaqQuestion
                            question='Is there a fee to use the job portal?'
                            ans='For applicants, creating a profile and applying for jobs is completely free. Employers may need to pay for posting jobs or accessing premium features such as advanced applicant tracking.'
                            >
                            </FaqQuestion>
                        </div>

                        <div className="pt-4">
                            <FaqQuestion
                            question='How do employers post a job?'
                            ans='Employers can log in to their account, go to the “Post a Job” section, and fill in the job details. After submission, the post will go live upon approval (if required) or immediately based on the plan selected.'
                            >
                            </FaqQuestion>
                        </div>

                        <div className="pt-4">
                            <FaqQuestion
                            question='How can I track the status of my job application?'
                            ans='Go to the "My Applications" section on your dashboard. Here you can see the status of each application, such as Applied, Shortlisted, or Rejected.'
                            >
                            </FaqQuestion>
                        </div>

                        <div className="pt-4">
                            <FaqQuestion
                            question='What should I do if I forget my password?'
                            ans='Click on the "Forgot Password" link on the login page. Enter your registered email address, and a password reset link will be sent to you. Follow the instructions to reset your password.'
                            >
                            </FaqQuestion>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Faq
