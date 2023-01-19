import axios from 'axios'
import {API_KEY, DISCOVER_API, SEARCH_API} from './constants'

export const fetchFromAPI = async(searchKey, setMovies) => {
    const data = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
        params: {
            api_key: API_KEY,
            query: searchKey
        }
    })
    setMovies(data.data.results)
}