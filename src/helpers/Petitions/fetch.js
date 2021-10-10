const baseUrl = 'http://localhost:4000/api';

export const fetchAnonymous = ( endpoint, data, method = 'GET' ) => {

    const url =`${ baseUrl }/${ endpoint }`;
    console.log(url)
    
    
    
    console.log("Esto que es:",endpoint)

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

