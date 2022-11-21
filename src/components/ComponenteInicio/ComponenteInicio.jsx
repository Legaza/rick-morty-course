import imagenRickMorti from '../../Resources/img/rick-morty.png'
import '../../App.css';
import { useState } from 'react';

import  ComponenteCaracter  from '../ComponenteCaracter/ComponenteCaracter';

function ComponenteInicio() {

  const [caracteres, asignarCaracteres] = useState(null);
  
  const respuestaApi = async () => {
    const api = await fetch(' https://rickandmortyapi.com/api/character ');
    const caracteresApi = await api.json();
    asignarCaracteres(caracteresApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {
          caracteres? 
            <ComponenteCaracter propsPersonaje = { caracteres } asignarCaracteres={asignarCaracteres}/>
          :
          <>
            <img src={imagenRickMorti} className='img-home' alt='Rick & Moty'/>
            <button className='btn-search' onClick={ respuestaApi }>
              Buscar Personaje
            </button>
          </>
        }
      </header>
    </div>
  );
}

export default ComponenteInicio;
