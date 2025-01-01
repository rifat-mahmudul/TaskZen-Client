
import { Link } from 'react-router';
import img1 from '../../assets/banner1.png';
import img2 from '../../assets/banner2.png';
import { SiAirtable } from "react-icons/si";
import { RxSketchLogo } from "react-icons/rx";
import { FaSlack } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <section className="bg-gradient-to-t from-emerald-400 via-emerald-100 to-emerald-50 py-20 min-h-[calc(100vh-69.33px)]">
        
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto text-center flex items-center justify-between border-b-2 border-white pb-16">

                <div>
                    <img src={img1} alt="" />
                </div>

                <div>
                    <h1 className='text-5xl text-gray-700 sm:w-[75%] mx-auto uppercase font-extrabold mb-4'>Get your dream job with Find Jobify.</h1>
                    <p className='sm:w-[85%] mx-auto text-gray-500'>Explore thousands of job listings or find the perfect candidate with Jobify. Our intuitive platform empowers job seekers and employers alike, making career growth and recruitment efficient and hassle-free.</p>
                    <Link to='all-jobs'>
                        <button className='py-3 px-10 bg-gradient-to-tl from-emerald-600 via-emerald-500 to-gray-300 hover:from-gray-300 hover:via-emerald-500 hover:to-emerald-600 mt-5 text-white text-xl font-extrabold rounded-lg transition'>Explore Jobs</button>
                    </Link>
                </div>

                <div>
                    <img src={img2} alt="" />
                </div>

            </div>

            <div className='max-w-[90%] xl:max-w-[1200px] mx-auto '>
                <Marquee>
                    <div className="flex space-x-8 mt-10">

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <SiAirtable />
                            </div>

                            <div>
                                <h1>Airtable</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <RxSketchLogo />
                            </div>

                            <div>
                                <h1>Sketch</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <FaSlack />
                            </div>

                            <div>
                                <h1>Slack</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <SiLivechat  />
                            </div>

                            <div>
                                <h1>LiveChat</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <FaGitlab  />
                            </div>

                            <div>
                                <h1>GitLab</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <FaLinkedin  />
                            </div>

                            <div>
                                <h1>Linkedin</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <FaDribbble  />
                            </div>

                            <div>
                                <h1>Dribbble</h1>
                            </div>
                        </div>

                        <div className='flex space-x-2 items-center text-white text-2xl font-bold'>
                            <div>
                                <SiAirtable  />
                            </div>

                            <div>
                                <h1>Airtable</h1>
                            </div>
                        </div>

                    </div>
                </Marquee>
            </div>

        </section>
    )
}

export default Banner
