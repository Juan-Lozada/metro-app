import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyApi from './components/MyApi';
import {useState} from 'react'
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent'
import LineaSelectComponent from './components/LineaSelectComponent';

function App() {

  const [linea, setLinea] = useState([]); 
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className='d-grid '>
      <NavbarComponent />
      <LineaSelectComponent linea={linea} />
      <MyApi setLinea={setLinea} linea={linea} />
      <FooterComponent/>
    </div>
  );
}

export default App;
