import { useState } from 'react'
import '../styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHeart} from "@fortawesome/free-regular-svg-icons";

function Footer() {
   
  
    return (
      <div className='FooterInformation'>
        <div className='Seal'>Mati y Sara <FontAwesomeIcon icon={faHeart} className='FootersHeart' /> 07 12 2024</div>
      </div>
    )
  }
  
  export default Footer
  