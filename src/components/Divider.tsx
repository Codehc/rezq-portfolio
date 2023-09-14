import React from "react";
import clsx from "clsx";

const Divider = ({
    dark,
  }:
  {
    dark?: boolean;
  }) => {
  return (
    <div className={clsx("inline-block rounded-full w-0.5 self-stretch", {
      "bg-neutral-500": !!dark,
      "bg-neutral-700": !dark,
    })}></div>
  )
}

export default Divider;