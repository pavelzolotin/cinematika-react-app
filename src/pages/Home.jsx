import {useEffect} from 'react'
import styled from 'styled-components'

import {fetchMovies} from '../utils/fetchFromAPI'
import MovieCard from '../components/MovieCard'

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 132rem;
  margin: 20rem 0 10rem 0;
`

const Home = ({searchTerm, movies, setMovies}) => {

    useEffect(() => {
        fetchMovies(searchTerm, setMovies)
    })

    return (
        <CardBox>
            {
                movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))
            }
        </CardBox>
    )
}

export default Home