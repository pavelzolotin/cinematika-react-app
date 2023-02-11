import axios from 'axios';
import {API_SEARCH, API_URL, options} from './constants';

export const fetchMovies = async (searchTerm, setMovies) => {
    await axios.get(`${searchTerm ? API_SEARCH + searchTerm : API_URL}`, options)
        .then(response => {
            setMovies(response.data.films);
        })
        .catch(error => {
            console.warn('Movies not loading', error);
        });
};