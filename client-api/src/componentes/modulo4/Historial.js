import React from "react";
function Historial() {
    return(
       <div className='caja-contenido col-9'>
        
       {/* Cards de información */}
       <div className='cards'>
           <div className='card'>
               <div className='card-content'>
                   <div className='number'>1</div>
                   <div className='card-name'>Estudihambres</div>
               </div>
               <div className='icon-box'>
                   <i className='fas fa-user-graduate'></i>
               </div>
           </div>
           <div className='card'>
               <div className='card-content'>
                   <div className='number'>1</div>
                   <div className='card-name'>Doicente</div>
               </div>
               <div className='icon-box'>
                   <i className='fas fa-chalkboard-teacher'></i>
               </div>
           </div>
           <div className='card'>
               <div className='card-content'>
                   <div className='number'>1</div>
                   <div className='card-name'>Estudihambres</div>
               </div>
               <div className='icon-box'>
                   <i className='fas fa-user'></i>
               </div>
           </div>
           <div className='card'>
               <div className='card-content'>
                   <div className='number'>1</div>
                   <div className='card-name'>Estudihambres</div>
               </div>
               <div className='icon-box'>
                   <i className='fas fa-dollar-sign'></i>
               </div>
           </div>
       </div>
   </div>
    )
}
export default Historial;