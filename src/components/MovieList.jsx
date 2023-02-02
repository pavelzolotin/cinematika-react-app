import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import MovieCard from '../components/MovieCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 132rem;
  margin: 0 0 7rem 0;
`
const Title = styled.h3`
  font-size: 2rem;
  margin: 18rem 0 1.5rem 0;
  font-family: var(--font-play);
  color: #f9d3b4;
`

const MovieList = ({movies, setMovies}) => {
    const {type} = useParams();

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=65f253fe48c848a16245196fd36824d8&language=en-US`)
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }

    useEffect(() => {
        fetchMovies();
    }, [type]);

    return (
        <Container>
            <Title className="list__title">{(type ? type.split('_').join(' ').toUpperCase() : '')}</Title>
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
        </Container>
    );
}

export default MovieList;