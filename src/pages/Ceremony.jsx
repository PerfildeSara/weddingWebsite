import React from "react";
import Countdown from "../components/CountDown.jsx";
import '../styles/Ceremony.scss'

function Ceremony(){
   const targetDate = new Date('2024-12-07T15:30:00'); // Cambia la fecha según tu necesidad
   return(
    <div className="ceremony">
      <p className="title">
         <h1>Mati y Sara</h1>
         <h3>Se casan y quieren celebrarlo contigo</h3>
      </p>
      <p className="date">
         <h2>Ceremonia y recepción</h2>
         <p>Condominio Las Margaritas casa 10E<br/>
         Sabado 07 de diciembre 2024<br/>
         03:30 P.M.</p>
      </p>
      <p className="countdownSpace">
         <h3>Faltan</h3>
         <div className="Countdown"><Countdown targetDate={targetDate} /></div>
      </p>
      <p className="confirmation">
         Confirma con Sara o Matías tu asistencia antes del 10/11/24
      </p>
    </div>
   )

}
export default Ceremony