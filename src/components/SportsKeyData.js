import { keyDataModel } from "../services/Format";
import "./sportsKeyData.css";
import calorieIcon from "../assets/calories-icon.png";
import glucideIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import PropTypes from 'prop-types';


/**
 * This  function returns a ccomponent with keydata as props in differents cards.
 * @param {object} props 
 * @param {object} props.data
 * @param {number} props.data.calorieCount
 * @param {number} props.data.carbohydrateCount
 * @param {number} props.data.lipidCount
 * @param {number} props.data.proteinCount
 * @returns {React.ComponentElement} cards with  data as  props
 */
function SportsKeyData(props) {

    const formatedKeyData = new keyDataModel(props.data);

    return (
        <div className="sportsKey-data-container">
            <div className="key-data-calories key-data-box">
                <div className="image">
                    <img src={calorieIcon} alt="" />
                </div>
                <div className="data">
                    <p className="number">{formatedKeyData.calorieCount}</p>
                    <p className="title">Calories</p>
                </div>
            </div>
            <div className="key-data-proteins key-data-box">
                <div className="image">
                    <img src={proteinIcon} alt="" />
                </div>
                <div className="data">
                    <p className="number">{formatedKeyData.proteinCount}</p>
                    <p className="title">Protéines</p>
                </div>
            </div>
            <div className="key-data-glucides key-data-box">
                <div className="image">
                    <img src={glucideIcon} alt="" />
                </div>
                <div className="data">
                    <p className="number">{formatedKeyData.carbohydrateCount}</p>
                    <p className="title">Glucides</p>
                </div>
            </div>
            <div className="key-data-lipides key-data-box">
                <div className="image">
                    <img src={lipidIcon} alt="" />
                </div>
                <div className="data">
                    <p className="number">{formatedKeyData.lipidCount}</p>
                    <p className="title">Lipides</p>
                </div>
            </div>
        </div>
    )
}

SportsKeyData.propTypes = {
    data: PropTypes.shape({
        calorieCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number,
        proteinCount: PropTypes.number
    })
}

export default SportsKeyData;