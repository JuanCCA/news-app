const baseUrl = process.env.REACT_APP_URI;

export const fetchAnonymous = ( endpoint, data, method = 'GET' ) => {

    const url =`${ baseUrl }/${ endpoint }`;
    console.log(process.env)
    console.log("UNA COSA ",url)
    
    
    
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

