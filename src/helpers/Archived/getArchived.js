

export const getArchived = async () => {

    const url='http://localhost:4000/api/archived/get_archived';
    const resp = await fetch( url )
    const archived = await resp.json()

    return archived

}