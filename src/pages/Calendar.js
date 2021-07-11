import { useContext } from "react";
import { Context } from "../store/appContext";

const Calendar = () => {
   const { store, actions } = useContext( Context)

    return (
        <div>
            <h1>Calendario/Agenda</h1>
            {/* <h5>{`${store.name} ${store.lastname}`}</h5>  */}
            <button onClick={actions.saludar} >
                click me!
            </button>
        </div>
    );
}
 
export default Calendar;