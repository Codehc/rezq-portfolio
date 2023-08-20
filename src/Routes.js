import Home from "./pages/Home"
import BlogPost from "./pages/blog/BlogPost"
import NotFound from "./pages/NotFound"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:post",
    element: <BlogPost />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routes;