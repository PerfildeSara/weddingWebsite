import { useState } from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
   
  
    return (
      <nav className='header'>
        <ul>
            <li><Link to="/" className='headerColors'>Inicio</Link></li>
            <li><Link to="/ceremonia" className='headerColors'> Ceremonia</Link></li>
            <li><Link to="/shedule" className='headerColors'> Programa</Link></li>
            <li><Link to="/vestuario" className='headerColors'> Vestuario</Link></li>
        </ul>
      </nav>
    )
  }
  
  export default Header
  