import React from "react";
import { NavigateFunction } from "react-router-dom";

const NavButton = ({
  label,
  navigate,
  route,
 }: {
  label: string;
  navigate: NavigateFunction;
  route: string;
 }) => {
  return (
    <button className="p-2 hover:bg-opacity-20 hover:bg-gray-500" onClick={() => navigate(route)}>
      {label}
    </button>
  )
}

export default NavButton;