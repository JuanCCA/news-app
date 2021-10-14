import { useEffect, useState } from "react"
import {getArchived} from '../helpers/Archived/getArchived'


export const useFetchArchived = (archived) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
         getArchived()
            .then((resp) => {
                setState({
                    data: resp,
                    loading: false
                })
            });
    }, [archived])


    return state;

}