import React from "react";
import Logo from "./Logo";
import { useNavigate } from 'react-router-dom';

function Navbar({setIsLoggedIn}) {

    const navigate = useNavigate();
  const logoutUser = ()=>
  {
     setIsLoggedIn(false);
     navigate('/');
  }
  return (
    <nav className="navbar">
      <Logo />
      <div>
<button onClick={logoutUser} >Logout</button>
      <span>Seerat Ali</span>
        </div>  
      
    </nav>
  );
}

export default Navbar;
