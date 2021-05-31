import { BrowserRouter, Route } from "react-router-dom";
import Sidevar from "./components/Sidevar";


function App() {
  return (
    <BrowserRouter>
      <Sidevar />
      <switch>
        <Route>

        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
