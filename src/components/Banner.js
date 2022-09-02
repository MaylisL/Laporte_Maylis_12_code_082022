
import './banner.css';
import  PropTypes from 'prop-types';


/** 
 * this function returns a banner and takes a name as props
 * @param {object} props contains name 
 * @param {string} props.name is used to display name in banner
 * 
 * @returns {React.ComponentElement} html node that represents  a banner and  uses the name provided as props
 */
function Banner(props) {
    return (
        <div className="banner-container">
            <h1> Bonjour <span className='name'>{props.name}</span> </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}

Banner.propTypes = {
    name: PropTypes.string
}

export default Banner