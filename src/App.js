import './App.css';
import routes from "./Routes"
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
  let app = useRoutes(routes);

  return app;
}

export default App;
