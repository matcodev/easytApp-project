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
import MasterRoute from "./layouts/master_layout";
import Login from "./pages/Login";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <switch>
      <div className="flex">
        <Sidebar />
        <div className="content">
          
          <MasterRoute path="/Home" exact={true} component={Home} />
          <MasterRoute path="/Calendar" exact={true} component={Calendar} />
          <MasterRoute path="/Sales" exact={true} component={Sales} />
          <MasterRoute path="/Clients" exact={true} component={Clients} />
          <Route path="/" exact={true} component={Networks} />
          {/* <MasterRoute path="/Perfil" exact={true} component={Perfil} /> */}
          <Route path="/Login" exact={true} component={Login} />
        </div>
      </div>
      </switch>
    </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
