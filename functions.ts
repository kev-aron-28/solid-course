(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCast( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface movieParams {
        title: string
        description: string
        rating: number
        cast: string[]

    }

    function createMovie({title, description, rating, cast}: movieParams ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( actorName: string, actorBirth: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( actorName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();