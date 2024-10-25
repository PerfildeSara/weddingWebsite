import React from "react";
import Countdown from "../components/CountDown.jsx";
import '../styles/Home.scss'

function Home(){
    const targetDate = new Date('2024-12-07T15:30:00'); // Cambia la fecha según tu necesidad
    return(    
        <div className="home">
            <div className="textoHome"> 
                <div className="SubtitleHome">Estamos contando los días
                </div>
                <div className="countdownSpace">
                    <div className="Countdown"><Countdown targetDate={targetDate} />
                    </div>
                </div>
            </div>
                
            <div className="HomeImage">
                <img src="HomeImage.jpeg" alt="Home Image" />
            </div>
        </div>
    )
}
export default Home