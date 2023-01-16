import {useEffect, useState} from 'react'

import axios from 'axios'
import MovieCard from '../components/movieCard/MovieCard'

const API_KEY = '65f253fe48c848a16245196fd36824d8'
const MOVIE_API = 'https://api.themoviedb.org/3/'
const SEARCH_API = MOVIE_API + 'search/movie'
const DISCOVER_API = MOVIE_API + 'discover/movie'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchMovies()
        setIsLoading(false)
    })

    const fetchMovies = async(event) => {
        if (event) {
            event.preventDefault()
        }
        const res = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })
        setMovies(res.data.results)
    }

    return (
        <>
            {
                isLoading ? (
                    <div className="movie__search--empty">
                        <h2>Movies are loading...</h2>
                    </div>
                ) : (
                    <div className="movie__card-box">
                        {
                            movies.map(movie => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Home