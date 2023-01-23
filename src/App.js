import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'

import './app.scss'

function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <BrowserRouter>
            <div className="app">
                <Header
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setMovies={setMovies}
                />
                <Routes>
                    <Route path="/" element={
                        <Home
                            searchTerm={searchTerm}
                            movies={movies}
                            setMovies={setMovies}
                        />
                    }/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
