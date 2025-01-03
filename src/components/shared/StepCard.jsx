import PropTypes from 'prop-types'

const StepCard = ({step, icon, title, desc}) => {
    return (
        <div className="flex flex-col items-center border-l-2 border-emerald-500 p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-gray-50 hover:scale-105">
            <div className="flex items-center justify-center  rounded-full bg-emerald-500 text-white">
                <div className='p-5 text-xl'>
                    {icon}
                </div>
            </div>
            <h4 className="mt-3 text-gray-500">{step}</h4>
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-center mt-2 text-gray-500">{desc}</p>
        </div>
    )
}

StepCard.propTypes = {
    step: PropTypes.string,
    icon: PropTypes.element,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default StepCard
