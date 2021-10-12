import { fetchAnonymous } from "../Petitions/fetch";

export const getNews = async () => {

    const resp = await fetchAnonymous( 'news/get_news', null)
    const news = await resp.json()

    return news

}