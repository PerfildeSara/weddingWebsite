import React from "react";
import '../styles/Shedule.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faLocationDot, faBurger, faCamera,faHeart, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'

function Shedule(){
   return(
    <div className="shedule">
      <h1>Programa</h1>
      <ul>
        <li>
          <div className="information"><h2>03:30   p.m</h2><h3>Llegada de invitados.</h3></div>
        </li>
        <li>
          <div className="information"><h2>04:00   p.m</h2><h3>Ceremonia.</h3></div>
        </li>
        <li>
          <div className="information"><h2>05:00   p.m</h2><h3>Saca tu mejor pose, queremos fotos para recordar este día cuando seamos viejitos.</h3></div>
        </li>
        <li>
          <div className="information"><h2>07:00   p.m</h2><h3>Cenamos en familia.</h3></div>
        </li>

        <li>
          <div className="information"><h2>08:00   p.m</h2><h3>Velitas y chucuchucu</h3></div>
        </li>
        
      </ul>
    </div>
   )

}
export default Shedule