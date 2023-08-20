import './App.css';
import routes from "./Routes"
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
  let app = useRoutes(routes);

  return (
    <BrowserRouter basename="rezq-portfolio">
      {app}
    </BrowserRouter>
  );
}

export default App;
