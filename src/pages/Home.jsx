import {useEffect} from 'react'
import styled from 'styled-components'

import {fetchMovies} from '../utils/fetchFromAPI'
import MovieList from '../components/MovieList'

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 132rem;
  margin: 2rem 0 7rem 0;
`

const Home = ({searchTerm, movies, setMovies}) => {

    useEffect(() => {
        fetchMovies(searchTerm, setMovies)
    })

    return (
        <CardBox>
            <MovieList
                movies={movies}
                setMovies={setMovies}
            />
        </CardBox>
    )
}

export default Home