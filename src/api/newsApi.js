import axios from 'axios';

const apiPrefix = "https://hacker-news.firebaseio.com/v0";

export const getNews = () => {
    console.log('[API] GET HACK NEWS');
    return axios.get(`${apiPrefix}/topstories.json?print=pretty`);
};

export const getArticle = (id) => {
    console.log('[API] GET ARTICLE');
    return axios.get(`${apiPrefix}/item/${id}.json?print=pretty`);
};
