import Home from "./pages/Home"
import BlogPost from "./pages/blog/BlogPost"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:post",
    element: <BlogPost />,
  },
]

export default routes;