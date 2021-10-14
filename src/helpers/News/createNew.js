import { fetchAnonymous } from "../Petitions/fetch";


export const createNew = async (title,description,content,author) => {

    //const url='http://localhost:4000/api/news/archive_new';
    
    const payload = {
        title,
        description,
        content,
        author,
    }

    const resp = await fetchAnonymous('news/create_new', payload, 'POST')
    const response = await resp.json()
    return response

}