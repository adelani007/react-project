import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css"
import { useState } from 'react';

function Navbar() {
  const [minimize, setMinimize] = useState(false)

  const handleClick = () => {
    setMinimize(!minimize)
  }

  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} />
      </div>
      <div className="rightside">
        {minimize && (
          <>
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </>
        )}
        <button onClick={handleClick} className="bg-white">
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;