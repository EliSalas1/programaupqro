import React from 'react';
import logop from '../img/logop.jpg'
import {Link} from 'react-router-dom';

function Navigation({showNav }){
return( 
    
    <aside className={`sidebar col-3 ${showNav ? 'active' : ''}`}> {/* Clase condicional */}

{/* <aside class="sidebar col-3"> */}
<img src={logop} alt='Logo' className='logo'/>

<nav class="navegacion">
    <Link to={"/firebase"} class="tachita">Firebase</Link>
    {/* FALTA MODULO 1 */}
    <Link to={"/modulo2"} class="tachita">Eventos</Link>
    <Link to={"/modulo3"} class="tachita">Crear formulario</Link>
    <Link to={"/modulo4"} class="tachita">Editar formulario</Link>
    <Link to={"/modulo5"} class="alumnos">Reporte</Link> 
    <Link to={"/modulo6"} class="carreras">Historial</Link>
    <Link to={"/modulo7"} class="carreras">PreView</Link>
     
</nav>
</aside>

)
}
export default Navigation;
