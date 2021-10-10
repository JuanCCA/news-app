import { useEffect, useState } from "react"
import {getNews} from '../helpers/News/getNews'


export const useFetchNews = (news) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
         getNews()
            .then((resp) => {
                setState({
                    data: resp,
                    loading: false
                })
            });
    }, [news])


    return state;

}