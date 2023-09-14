import React from "react";
import { useNavigate } from "react-router-dom";
import FullContextPage from "./FullContextPage";
import PostPreview from "../components/PostPreview";
import Divider from "../components/Divider";

const Home = () => {
  const navigate = useNavigate();

  return (
    <FullContextPage>
      <div className="flex flex-auto gap-5 items-start justify-center">
        <PostPreview post="project_introduction" />
        <Divider dark />
        <PostPreview post="powering_posefixer" />
        <Divider dark />
        <PostPreview post="headers_day_1" />
      </div>
    </FullContextPage>
  )
}

export default Home;