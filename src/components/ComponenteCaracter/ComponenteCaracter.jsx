import React from 'react'

function ComponenteCaracter(props){
    
    const {propsPersonaje, asignarCaracteres} = props;

    const reinicioCaracter = () => {
        asignarCaracteres(null);
    }

    return(
        <div className='caracteres'>
            
            <h1> Personajes</h1>
            
            <span className='back-home' onClick={reinicioCaracter}>Volver a Inicio</span>
            
            <div className='container-character'>
                {propsPersonaje.map((personaje, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={personaje.image} alt={personaje.name} />
                        </div>
                        <div>
                            <h3>{personaje.name}</h3>
                            <h6>
                                {personaje.status === 'Alive' ? (
                                    <>
                                        
                                        <span className='alive'></span>
                                        <span >Vivo</span>
                                    </>
                                ):(
                                    <>
                                        <span className='dead'></span>
                                        <span >Muerto</span>
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className='text-grey'>
                                    No de apariciones:
                                    <span>
                                        {personaje.episode.length}
                                    </span>
                                </span>
                            </p>
                            <p>
                                <span className='text-grey'>
                                    Especie:
                                    <span>
                                        {personaje.species}
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className='back-home' onClick={reinicioCaracter}>Volver a Inicio</span>

        </div>
    );

}

export default ComponenteCaracter;
