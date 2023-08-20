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
      <div className="w-4/6">
        <p>{postParsed.title}</p>
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
              return <p>{content}</p>
            } else if (type === "image") {
              return (
                <div className="flex justify-center">
                  <LoadingImage image={content} loadingColor={loadingColor} width={width} height={height} />
                </div>
              )
            } else {
              return <p>Invalid content type: {type}</p>
            }
          })
        }
      </div>
    </FullContextPage>
  )
}

export default BlogPost;