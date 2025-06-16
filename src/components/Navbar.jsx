import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} />
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <button className="bg-amber-200">
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;