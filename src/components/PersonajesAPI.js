const PersonajesApi = async () => {
    const url = ' https://rickandmortyapi.com/api/character ';
    const respuesta = await fetch( url );
    const { results } = await respuesta.json();

    const personajes = results.map( personaje => ({
        id: personaje.id,
        title: personaje.name,
        status: personaje.status,
        species: personaje.species,
        
    }) );
}