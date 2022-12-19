import {useState, useEffect} from 'react'

import MovieCard from './components/MovieCard'
import './index.scss'

const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
const API_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '799e8cb3-e1e8-4fcf-aa99-bbb764d88980'
    }
}

function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchResult = `${API_SEARCH}${searchTerm}`

    const getMovies = (url) => {
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setMovies(json.films)
            })
            .catch(err => {
                console.warn(err)
                alert('We haven\'t get movies')
            })
    }

    useEffect(() => {
        if (searchTerm !== '') {
            getMovies(searchResult)
        } else {
            getMovies(API_URL)
        }
    }, [searchTerm, searchResult])

    return (
        <div className="app">
            <div className="app__header">
                <a href="/" className="app__logo">
                    <h1 className="app__title">Cinematika</h1>
                </a>
                <div className="movie__search">
                    <input
                        className="movie__search__input"
                        placeholder="Type anything"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="movie__search__input--bg"/>
                </div>
            </div>
            {
                movies?.length > 0 ? (
                    <div className="movie__card-box">
                        {
                            movies.map((movie, i) => (
                                <MovieCard
                                    key={i}
                                    movie={movie}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className="movie__search--empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App
