import { Link } from 'react-router';
import img1 from '../../assets/banner1.png';
import img2 from '../../assets/banner2.png';

const Banner = () => {
    return (
        <section className="bg-gradient-to-t from-emerald-400 via-emerald-100 to-emerald-50 py-10 sm:py-16 min-h-[calc(100vh-69.33px)] flex flex-col items-center justify-center">
        
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto text-center sm:flex items-center justify-between sm:gap-5 lg:gap-0">

                <div>
                    <img className='mx-auto sm:mx-0 mb-5 sm:mb-0 h-40 sm:h-full animate-pulse' src={img1} alt="" />
                </div>

                <div>
                    <h1 className='text-5xl text-gray-700 lg:w-[75%] mx-auto uppercase font-extrabold mb-4'>Get your dream job with Find Jobify.</h1>
                    <p className='lg:w-[85%] mx-auto text-gray-500'>Explore thousands of job listings or find the perfect candidate with Jobify. Our intuitive platform empowers job seekers and employers alike, making career growth and recruitment efficient and hassle-free.</p>
                    <Link to='all-jobs'>
                        <button className='py-3 px-10 bg-gradient-to-tl from-emerald-600 via-emerald-500 to-gray-300 hover:from-gray-300 hover:via-emerald-500 hover:to-emerald-600 mt-5 text-white text-xl font-extrabold rounded-lg transition'>Explore Jobs</button>
                    </Link>
                </div>

                <div>
                    <img className='mx-auto sm:mx-0 mt-10 sm:mb-0 h-20 sm:h-full' src={img2} alt="" />
                </div>

            </div>

        </section>
    )
}

export default Banner
