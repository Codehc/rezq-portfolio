import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <NavButton label="Home" navigate={navigate} route="/" />
    </div>
  )
}

export default NavBar;