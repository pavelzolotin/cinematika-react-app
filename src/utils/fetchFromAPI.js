import axios from 'axios'
import {API_KEY, DISCOVER_API, SEARCH_API} from './constants'

export const fetchMovies = async (searchTerm, setMovies) => {
    const data = await axios.get(`${searchTerm ? SEARCH_API : DISCOVER_API}`, {
        params: {
            api_key: API_KEY,
            query: searchTerm
        }
    })
    setMovies(data.data.results)
}