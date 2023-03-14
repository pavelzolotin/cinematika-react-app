import {useEffect} from 'react';

import axios from 'axios';
import styled from 'styled-components';

import {API_SEARCH, API_URL, options} from '../utils/constants';
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

const Home = ({movies, setMovies, searchTerm, isLoading, setIsLoading}) => {

    useEffect(() => {
        const fetchMovies = async () => {
            await axios.get(`${searchTerm ? API_SEARCH + searchTerm : API_URL}`, options)
                .then(response => {
                    setMovies(response.data.films);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.warn('Movies not loading', error);
                });
        };
        fetchMovies();

        if (searchTerm.length >= 1) {
            window.scrollTo(0, 0);
        }
    }, [searchTerm, setMovies, setIsLoading]);

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