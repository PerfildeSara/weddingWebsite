import React from "react";
import Countdown from "../components/CountDown.jsx";
import '../styles/Ceremony.scss'

function Ceremony(){
   const targetDate = new Date('2024-12-07T15:30:00'); // Cambia la fecha según tu necesidad
   return(
    <div className="ceremony">
      <div className="title">
         
         <h1>El matri de Mati y Sara</h1>
         
         <h3>Nos emociona haber elegido un día para celebrar 
            nuestro amor y nos encantaría hacerlo contigo. 
            <br/>
            <br/>
            El mejor regalo que nos puedes dar es tu presencia. 
         </h3>
      </div>
      <p className="time">
         <h2>Sabado 07 de diciembre 2024 
         </h2>
      </p>
      <p className="date">
       
         <p>Te esperamos en el 
            Condominio Las Margaritas casa 10E en Combia, 
            Risaralda 03:30 P.M. 
            <br/>
            Confirma tu asistencia antes del 10/11/24
         </p>
      </p>
    </div>
   )

}
export default Ceremony