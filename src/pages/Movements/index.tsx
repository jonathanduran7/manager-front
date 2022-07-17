import MovementForm from "./components/MovementForm";
import "./movements.css";

const Movements = () => {
   return (
      <div className="movement-page">
         <h1>Movements</h1>

         <div className="movement-content">
            <div className="movement-content-table">
               Tabla de movimientos
            </div>

            <div className="movement-content-form">
               <MovementForm/>
            </div>
         </div>
      </div>
   );
}

export default Movements;