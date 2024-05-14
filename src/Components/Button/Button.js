import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  return (
    <Link to="" className="Btn">{props.children}</Link>
  );
}

export default Button;