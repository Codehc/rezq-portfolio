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
        <div className="text-4xl">
          {postParsed.title}
        </div>
        <div className="flex items-center justify-center">
          <LoadingImage image={postParsed.previewImage.name} loadingColor={postParsed.previewImage.loadingColor} className="my-2 w-full aspect-video" />
        </div>
        <div>
          {postParsed.previewText}
        </div>
      </div>
    )
}

export default PostPreview;