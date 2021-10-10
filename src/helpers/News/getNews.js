

export const getNews = async () => {

    const url='http://localhost:4000/api/news/get_news';
    const resp = await fetch( url )
    const news = await resp.json()

    return news

}