import styled from 'styled-components';

import MovieList from '../components/MovieList';

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 132rem;
  margin: 18rem 0 7rem 0;

  @media (max-width: 767px) {
    margin: 15rem 0 0 0;
  }
`;

const Home = ({movies, isLoading}) => {
    return (
        <CardBox>
            <MovieList
                movies={movies}
                isLoading={isLoading}
            />
        </CardBox>
    );
};

export default Home;