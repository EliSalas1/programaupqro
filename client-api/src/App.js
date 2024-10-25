
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/componentes/layout/header';
import Navigation from './componentes/layout/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importante haber instalado el: npm install react-router-dom, para que funcione las rutas
import { Fragment, useState  } from 'react';
import './App.css';
import FirebaseView from './componentes/firebase/FirebaseView';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Empiezan las vistas:
import EventosPrincipal from './componentes/modulo2/EventosPrincipal';
import MyDropdown from './componentes/modulo3/mod3';
import Myformularioedit from './componentes/modulo4/mod4';
import EventReportTable from './componentes/modulo5/mod5';
import Historial from './componentes/modulo6/Historial';
import PrevView from './componentes/modulo7/mod7';

function App() {
  const [showNav, setShowNav] = useState(false);  // Estado para controlar el sidebar

  return (
    <Router>
     <Fragment>
     <Header setShowNav={setShowNav} showNav={showNav} /> {/* Pasar el estado y setter al Header */}
        <div className={`grid contenedor contenido-principal ${showNav ? 'nav-open' : ''}`}>
          <Navigation showNav={showNav} />  {/* Pasar el estado al Navigation */}
          <main className="caja-contenido col-9">
  
      <Routes>
      {/* especifican la ruta URL y qué componente se debe renderiza */}
      
      
      <Route path='/firebase'element= {<FirebaseView/>}/> 
      {/* LO DE ARRIBA es la base de datos de Firebase y aún falta poner el modulo 1 que será el LOGIN */}
      <Route path='/modulo2'element= {<EventosPrincipal/>}/>
      <Route path='/modulo3'element= {<MyDropdown/>}/>
      <Route path='/modulo4'element= {<Myformularioedit/>}/>
      <Route path='/modulo5'element= {<EventReportTable/>}/> 
      <Route path='/modulo6'element= {<Historial/>}/>
      <Route path='/modulo7'element= {<PrevView/>}/>
     
      </Routes>
     </main>
     </div>
      </Fragment> 
    </Router>
  );
}

export default App;
