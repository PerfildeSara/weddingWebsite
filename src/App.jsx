import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.scss'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Ceremony from './pages/Ceremony.jsx' 
import Attire from './pages/Attire.jsx'
import Home from './pages/Home.jsx'
import Shedule from './pages/Shedule';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/ceremonia" element={<Ceremony />} />
          <Route path="/shedule" element={<Shedule />} />
          <Route path="/vestuario" element={<Attire />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
