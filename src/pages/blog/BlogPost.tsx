import React from "react";
import FullContextPage from "../FullContextPage";
import posts from "../../contexts/PostManager";
import { useParams } from "react-router-dom";
import LoadingImage from "../../components/LoadingImage";

const BlogPost = () => {
  const { post } = useParams();
  const postParsed = posts(`./${post}.json`);

  return (
    <FullContextPage className="flex justify-center">
      <div className="flex flex-col gap-y-2 w-4/6 p-2 rounded-md border-4 border-gray-300 bg-gray-200">
        <p className="font-bold text-4xl">{postParsed.title}</p>
        {
          postParsed.content.map(({ 
            type,
            content,
            loadingColor,
            width,
            height,
          }: {
            type: string;
            content: string;
            loadingColor: string;
            width: string;
            height: string;
          }) => {
            if (type === "text") {
              return <p className="text-lg">{content}</p>
            } else if (type === "image") {
              return <LoadingImage image={content} loadingColor={loadingColor} width={width} height={height} className={`rounded-md shadow-lg border-4 border-[${loadingColor}]`} />
            } else {
              return <p className="text-red">Invalid content type: {type}</p>
            }
          })
        }
      </div>
    </FullContextPage>
  )
}

export default BlogPost;