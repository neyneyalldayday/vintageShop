import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav() {
  function showNavigation() {

    if (Auth.loggedIn() && Auth.isAdmin()) {
      return (
        <ul className="flex-row-nav">
          <li className="nav-item">
            <Link to='/add-category'>Add Category</Link>
          </li>
        </ul>
      )
    } else if (Auth.loggedIn()) {
      return (
        <ul className="flex-row-nav">
          <li className="nav-item">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row-nav">
          <li className="nav-item">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }


 
  }

  return (
    <header className="site-title">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
          🦊
          </span>
          -LePalefox-Vintage
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
