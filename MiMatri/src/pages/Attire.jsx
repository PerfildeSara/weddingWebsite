import React from "react";
import "../styles/Attire.scss"
import Weather from "../components/Weather.jsx";



function Attire(){
    return (
        <div className="attire">
            <h1>Vestuario</h1>
            <h3> En Combia generalmente hace mucho calor en las tardes y refresca al anochecer, te recomendamos llevar ropa fresca y comoda. </h3>
            <Weather />
            <h2>Mujeres</h2>
            <h3>Vestido, falda larga o pantalón. <br/>
                Preferiblemente no usar blanco, beige.</h3>
            <h2>Hombres</h2>
            <h3>Camisa manga larga colores claros y pantalón.</h3>
        </div>
    )


}
export default Attire