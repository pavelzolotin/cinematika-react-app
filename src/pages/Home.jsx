import {useEffect, useState} from 'react'

import {fetchFromAPI} from '../../src/utils/fetchFromAPI'
import MovieCard from '../components/movieCard/MovieCard'

const Home = ({searchKey, movies, setMovies}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchFromAPI(searchKey, setMovies)
            .then(() => setIsLoading(false))
    }, [setIsLoading])

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