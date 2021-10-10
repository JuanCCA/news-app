import { fetchAnonymous } from "../Petitions/fetch";


export const archiveNew = async (_id) => {

    //const url='http://localhost:4000/api/news/archive_new';
    
    const payload = {
        _id: _id
    }

    
    const resp = await fetchAnonymous('news/archive_new', payload, 'POST')
    const news = await resp.json()
    return news

}