


export const formatDate = (d) => {

    const date = new Date(d)

    let year = date.getFullYear()

    let month = (date.getMonth() + 1).toString()
    if(month.length === 1) month = '0' + month;

    let day = (date.getDate()).toString()
    if(day.length === 1) day = '0' + day;

    let hour = (date.getHours()).toString()
    if(hour.length === 1) hour = '0' + hour;

    let minutes = (date.getMinutes()).toString()
    if(minutes.length === 1) minutes = '0' + minutes;

    
    const formatedDate = `${year}/${month}/${date.getDate()}  ${hour}:${minutes}`


    return formatedDate

}