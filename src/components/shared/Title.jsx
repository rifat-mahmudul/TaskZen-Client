import PropTypes from 'prop-types'

const Title = ({title, desc}) => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center'>{title}</h1>
                <p className='text-center mt-2 text-lg text-gray-500'>{desc}</p>
            </div>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default Title
