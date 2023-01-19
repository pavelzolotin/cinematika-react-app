import {useState} from 'react'

import Home from '../../pages/Home'
import Header from '../header/Header'

import './app.scss'

function App() {
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState('')

    return (
        <div className="app">
            <Header
                searchKey={searchKey}
                setSearchKey={setSearchKey}
                setMovies={setMovies}
            />
            <div className="app__container">
                <Home
                    searchKey={searchKey}
                    movies={movies}
                    setMovies={setMovies}
                />
            </div>
        </div>
    )
}

export default App
