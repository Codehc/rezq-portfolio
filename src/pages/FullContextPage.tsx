import React, { ReactNode } from "react";
import clsx from "clsx";
import NavBar from "../components/navigation/NavBar";

const FullContextPage = ({ 
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <NavBar />
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

export default FullContextPage;