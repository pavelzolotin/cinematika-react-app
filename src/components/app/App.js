import {useState, useEffect} from 'react'

import MovieCard from '../movieCard/MovieCard'
import Header from '../header/Header'

import './app.scss'

const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
const API_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
//const API_ID = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'
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

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )
    const [logo, setLogoColor] = useState(
        localStorage.getItem('logo') || 'lighten'
    )
    const themeMode = theme === 'dark' ? 'dark-mode' : 'light-mode'
    const toggleIsClicked = theme === 'light' ? true : ''

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            setLogoColor('darken')
        } else {
            setTheme('dark')
            setLogoColor('lighten')
        }
    }

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

    const clearSearchInput = () => {
        setSearchTerm('')
        getMovies(API_URL)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
        document.body.className = theme
    }, [theme, logo])

    useEffect(() => {
        if (searchTerm !== '') {
            getMovies(searchResult)
        } else {
            getMovies(API_URL)
        }
    }, [searchTerm, searchResult])

    return (
        <div className={`app ${themeMode}`}>
            <Header
                logo={logo}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                clearSearchInput={clearSearchInput}
                toggleTheme={toggleTheme}
                toggleIsClicked={toggleIsClicked}
            />
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
