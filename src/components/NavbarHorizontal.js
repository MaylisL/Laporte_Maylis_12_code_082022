import './navbarHorizontal.css'
import logo from '../assets/logo.png'

/**
 * this function  is returning the main html navbar component
 * @returns {React.ComponentElement}
 */
function NavbarHorizontal() {
    return (
        <div className="navbar_horizontal_container">
            <img className="logo" src={logo} alt=""></img>
            <ul className='menu'>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    )
}

export default NavbarHorizontal;