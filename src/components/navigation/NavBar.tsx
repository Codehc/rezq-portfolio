import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-row">
      <NavButton navigate={navigate} route="/">Reza Bagheri</NavButton>
    </div>
  )
}

export default NavBar;