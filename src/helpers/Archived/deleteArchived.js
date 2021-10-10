import { fetchAnonymous } from "../Petitions/fetch";

export const deleteArchived = async (_id) => {

    const payload = {
        _id: _id
    }

    
    const resp = await fetchAnonymous('archived/delete_archived', payload, 'DELETE')
    const response = await resp.json()
    return response
}

