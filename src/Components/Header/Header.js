import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <div className="Buttons flex">
            <Button>LOGIN</Button>
            <Button>SIGN IN</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>30</span>
          </Link>
        </div>
      </div>





     
    </header>
  );
}

export default Header;