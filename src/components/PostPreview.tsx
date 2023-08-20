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
    )
}

export default PostPreview;