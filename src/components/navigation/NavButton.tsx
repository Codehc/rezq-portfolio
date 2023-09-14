import React, { PropsWithChildren, ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import clsx from "clsx";

const NavButton = ({
  className,
  navigate,
  route,
  children,
 }: {
  className?: string;
  navigate: NavigateFunction;
  route: string;
  children: ReactNode;
 }) => {
  return (
    <button className={clsx(
      "p-2 first:text-rp-ultralight-gray text-rp-light-gray link-underline link-underline-black hover:bg-opacity-20 hover:bg-gray-500",
      className,
    )} onClick={() => navigate(route)}>
      {children}
    </button>
  )
}

export default NavButton;