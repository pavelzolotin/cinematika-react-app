import styled from 'styled-components';

import MovieCard from '../components/MovieCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 132rem;
  margin: 0 0 7rem 0;
`;

const MovieList = ({movies}) => {
    return (
        <Container>
            <CardBox>
                {
                    movies.map(movie => (
                        <MovieCard
                            key={movie.filmId}
                            movie={movie}
                        />
                    ))
                }
            </CardBox>
        </Container>
    );
};

export default MovieList;