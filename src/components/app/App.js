import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../../pages/Home'
import Header from '../header/Header'

import './app.scss'

function App() {
    const [searchKey, setSearchKey] = useState('')
    const [movies, setMovies] = useState([])

    return (
        <BrowserRouter>
        <div className="app">
            <Header
                searchKey={searchKey}
                setSearchKey={setSearchKey}
                setMovies={setMovies}
            />
            <div className="app__container">
                <Routes>
                    <Route path="/" element={
                        <Home
                            searchKey={searchKey}
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
