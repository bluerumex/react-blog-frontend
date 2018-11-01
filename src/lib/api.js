import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tags}) => {
    return axios.post('/api/posts', {title, body, tags});
};

export const getPost = (id) => {
    return axios.get(`/api/posts/${id}`);
};

export const getPostList = ({tag, page}) => {
    return axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);
}
