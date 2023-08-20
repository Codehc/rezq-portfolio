import React, { useState } from "react";
import clsx from "clsx";
import getImage from "../contexts/ImageManager";

const LoadingImage = ({ 
  image,
  loadingColor,
  className,
  width,
  height,
 }: {
  image: string;
  loadingColor: string;
  className?: string;
  width?: string;
  height?: string;
 }) => {
  const [ loading, setLoading ] = useState(true);

  const imageData = getImage(image);

  return (
    <>
      {(loading ? (
        <div
          className={clsx(className, `animate-pulse bg-[${loadingColor}]`)}
        >
        </div>
      ) : null)}
      <img 
        src={imageData}
        className={clsx(
          className, 
          "object-cover",
          {
            "hidden": loading,
          }
        )}
        style={{
          width: width,
          height: height,
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  )
}

export default LoadingImage;