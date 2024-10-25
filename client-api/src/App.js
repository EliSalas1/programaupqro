
import './App.css';
import Header from '../src/componentes/layout/header';
import Navigation from './componentes/layout/Navigation';
// import MyDropdown from './componentes/formulario/mod3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myformularioedit from './componentes/formulario/mod4';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="grid contenedor contenido-principal">
        <Navigation />
        <main className="caja-contenido col-9">
         {/* <MyDropdown/> */}
         <Myformularioedit/>
         
      
        </main>
      </div>
    </div>
  );
}

export default App;
