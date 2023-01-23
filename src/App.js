import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../../pages/Home'
import Header from '../header/Header'
//import MovieDetails from '../MovieDetails'

import './app.scss'

function App() {
    const [movies, setMovies] = useState([])
    //const [movie, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <BrowserRouter>
            <div className="app">
                <Header
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setMovies={setMovies}
                />
                <div className="app__container">
                    <Routes>
                        <Route exact path="/" element={
                            <Home
                                searchTerm={searchTerm}
                                movies={movies}
                                setMovies={setMovies}
                            />
                        }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
