import { Link } from "react-router-dom";
import '../styles/Nav.css'
import '../styles/Main.css'
import cartIcon from '../assets/icons/cart.svg'
import heartIcon from '../assets/icons/heart.svg'
import searchIcon from '../assets/icons/search.svg'

const Nav = () => {
  return (
    <nav className="navbar" name='navbar'>
      <ul className="navbar-links default-text medium-font">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Women'>Women</Link></li>
        <li><Link to='/Men'>Men</Link></li>
        <li><Link to='/Kids'>Kids</Link></li>
        <li><Link to='/Baby'>Baby</Link></li>
      </ul>
      <ul className="navbar-rightItems">
        <li><div className="navbar-rightItems-container">
          <img className='icon' src={searchIcon} alt="search icon" />
          <p>Search</p>
        </div></li>
        <li><Link to='/WishList'>
          <div className="navbar-rightItems-container">
            <img className='icon' src={heartIcon} alt="heart icon" />
            <p>Wishlist</p>
          </div>
        </Link></li>
        <li><Link to='/Cart'>
          <div className="navbar-rightItems-container">
            <img className='icon' src={cartIcon} alt="cart icon" />
            <p>Cart</p>
          </div>
        </Link></li>
      </ul>
    </nav>
  );
}

export default Nav