import React from "react";
import { useNavigate } from "react-router-dom";
import FullContextPage from "./FullContextPage";
import PostPreview from "../components/PostPreview";

const Home = () => {
  const navigate = useNavigate();

  return (
    <FullContextPage>
      <div className="flex flex-auto gap-5 items-center justify-center">
        <PostPreview post="headers_day_1" />
        <PostPreview post="headers_day_1" />
        <PostPreview post="headers_day_1" />
      </div>
    </FullContextPage>
  )
}

export default Home;