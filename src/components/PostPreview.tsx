import React from "react";
import { useNavigate } from "react-router-dom";
import posts from "../contexts/PostManager";
import LoadingImage from "./LoadingImage";

const PostPreview = ({
    post,
  }: {
    post: string;
  }) => {
    const navigate = useNavigate();

    const postParsed = posts(`./${post}.json`);

    return (
      <div 
        className="flex flex-col gap-y-2 w-1/4 hover:scale-[102%] transition-transform duration-75 cursor-pointer"
        onClick={() => {
          navigate(`/blog/${post}`);
        }}
      >
        <p className="text-rp-ultralight-gray">
          {postParsed.title}
        </p>
        <p className="">
          {postParsed.series} #{postParsed.seriesId}
        </p>
        <div className="">
          <LoadingImage image={postParsed.previewImage.name} loadingColor={postParsed.previewImage.loadingColor} className="rounded-md border-rp-ultralight-gray border-2 shadow-md w-full aspect-video" />
        </div>
        <p>
          {postParsed.previewText}
        </p>
      </div>
    )
}

export default PostPreview;

/*
<div 
        className="p-3 w-1/4 rounded-md border-2 text-smooth-gray border-midnight bg-night-sky shadow-md transition duration-150 hover:scale-105"
        onClick={() => {
          navigate(`/blog/${post}`);
        }}
      >
        <p className="text-4xl">
          {postParsed.title}
        </p>
        <p className="text-sm">
          {postParsed.series} #{postParsed.seriesId}
        </p>
        <div className="flex items-center justify-center">
          <LoadingImage image={postParsed.previewImage.name} loadingColor={postParsed.previewImage.loadingColor} className="my-2 rounded-md border-2 border-midnight w-full aspect-video" />
        </div>
        <p>
          {postParsed.previewText}
        </p>
      </div>
*/