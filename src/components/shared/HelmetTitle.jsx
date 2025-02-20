import { Helmet } from "react-helmet-async"
import PropTypes from 'prop-types'

const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} | TaskZen</title>
        </Helmet>
    )
}

HelmetTitle.propTypes = {
    title: PropTypes.string,
}

export default HelmetTitle
