import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import styled from 'styled-components';

import { searchSelector } from '../redux/search/selectors';
import { API_SEARCH, API_URL, options } from '../utils/constants';
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

const Home = () => {
    const {searchValue} = useSelector(searchSelector);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${searchValue ? API_SEARCH + searchValue : API_URL}`, options)
                setMovies(response.data.films);
                setIsLoading(false);
            } catch (err) {
                console.warn('Movies not loading', err);
            }
        };
        fetchMovies();

        if (searchValue.length >= 1) {
            window.scrollTo(0, 0);
        }
    }, [searchValue, setMovies, setIsLoading]);

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