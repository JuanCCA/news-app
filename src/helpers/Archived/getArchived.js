import {fetchAnonymous} from '../Petitions/fetch'

export const getArchived = async () => {

    const resp = await fetchAnonymous('archived/get_archived', null)
    const archived = await resp.json()

    return archived

}