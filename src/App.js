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
import SignUp from "./pages/Signup";
import Perfil from "./pages/Perfil";
import Configuracion from "./pages/Configuracion";


function App() {
  return (
    <div>
    <BrowserRouter>
    <MasterRoute component={Navbar} />
      <switch>
      <div className="flex">
      <MasterRoute component={Sidebar} />
        <div className="content">
          
          <MasterRoute path="/home" exact={true} component={Home} />
          <MasterRoute path="/calendar" exact={true} component={Calendar} />
          <MasterRoute path="/sales" exact={true} component={Sales} />
          <MasterRoute path="/clients" exact={true} component={Clients} />
          <MasterRoute path="/networks" exact={true} component={Networks} />
          <MasterRoute path="/perfil" exact={true} component={Perfil} />
          <MasterRoute path="/configuracion" exact={true} component={Configuracion} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/" exact={true} component={Login} />
        </div>
      </div>
      </switch>
    </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
