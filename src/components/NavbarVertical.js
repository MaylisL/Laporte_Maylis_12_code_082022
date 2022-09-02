import  './navbarVertical.css'
import zenImage from '../assets/iconzen.png'
import zenSwim from '../assets/iconswim.png'
import zenBicycle from '../assets/iconbicycle.png'
import zenMuscle from '../assets/iconmuscle.png'

/**
 * this function  is returning the side navbar html component
 * @returns {React.ComponentElement}
 */
 function NavbarVertical() {
    return (
        <div className="navbar_vertical_container">
            <ul className="images-wrapper">
                <li><img className="" src={zenImage} alt=""></img></li>
                <li><img className="" src={zenSwim} alt=""></img></li>
                <li><img className="" src={zenBicycle} alt=""></img></li>
                <li><img className="" src={zenMuscle} alt=""></img></li>
            </ul>
            <div className='copyright'>
                <p>Copyright, SportSee 2020</p>
            </div>
           
        </div>
    )
}

export default NavbarVertical;