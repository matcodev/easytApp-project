import { BrowserRouter, Route } from "react-router-dom";
import Sidevar from "./components/Sidevar";
import Ingresos from "./Screens/Ingresos";


function App() {
  return (
    <BrowserRouter>
      <Sidevar />
      <Ingresos />
      <switch>
        <Route>

        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
