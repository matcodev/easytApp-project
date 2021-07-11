import { BrowserRouter, Route } from "react-router-dom";
import './css/style.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sales from "./pages/Sales";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Calendar from "./pages/Calendar";
import Networks from "./pages/Networks";
import injectContext from "./store/appContext";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Route path="/Home" exact={true} component={Home} />
          <Route path="/Calendar" exact={true} component={Calendar} />
          <Route path="/Sales" exact={true} component={Sales} />
          <Route path="/Clients" exact={true} component={Clients} />
          <Route path="/Networks" exact={true} component={Networks} />
        </div>
      </div>
      <switch>
        <Route>

        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
