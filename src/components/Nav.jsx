import { Link } from "react-router-dom";
import '../styles/Nav.css'
import '../styles/Main.css'

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
        <li><div className="container">
          <img src="" alt="" />
          <p>Search</p>
        </div></li>
        <li><div className="container">
          <img src="" alt="" />
          <p>Wishlist</p>
        </div></li>
        <li><div className="container">
          <img src="" alt="" />
          <p>Cart</p>
        </div></li>
      </ul>
    </nav>
  );
}

export default Nav