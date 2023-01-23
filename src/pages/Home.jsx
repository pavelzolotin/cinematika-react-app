import {useEffect, useState} from 'react'

import {fetchMovies} from '../utils/fetchFromAPI'
import MovieCard from '../components/MovieCard'

const Home = ({searchTerm, movies, setMovies}) => {

    useEffect(() => {
        fetchMovies(searchTerm, setMovies)
    })

    return (
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

export default Home