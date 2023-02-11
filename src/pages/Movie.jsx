import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import {options} from '../utils/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 10rem 0 20rem 0;
`;

const Intro = styled.div`
  position: absolute;
  width: 67rem;
  right: 5rem;
`;

const Backdrop = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0 0 3rem 3rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .6rem .6rem rgba(0, 0, 0, 0.23);
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin-top: 22rem;
  background: rgba(33, 36, 38, 0.9);
  box-shadow: rgba(17, 17, 17, 50%) 0 1rem 1rem .5rem;
  border-radius: 1rem;
  z-index: 1;
`;

const DetailsLeft = styled.div`
  margin-right: 3rem;
`;

const PosterBox = styled.div``;

const Poster = styled.img`
  width: 30rem;
  border-radius: 1rem;
  box-shadow: rgb(17, 17, 17, 85%) 0 2.2rem 4rem .6rem;
`;

const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;
  height: 100%;

  & > div {
    text-shadow: 0 0 .5rem #222222;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 3.8rem;
  margin-bottom: 1.2rem;
`;

const Rating = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const VoteAverage = styled.span`
  font-size: 2rem;
  margin-right: .5rem;
`;

const ReleaseDate = styled.div`
  font-size: 1.8rem;
  margin-bottom: 5rem;
`;

const Genres = styled.div`
  margin-bottom: 3rem;
`;

const Genre = styled.span`
  padding: .8rem 1.8rem;
  margin-right: 1.2rem;
  font-size: 1.6rem;
  background-color: rgba(245, 245, 245, .1);
  border-radius: 2rem;
`;

const Description = styled.div`
  width: 70%;
  font-size: 1.8rem;
  letter-spacing: 1.2px;
  line-height: 1.7;
`;

const ButtonReturn = styled.button`
  margin: 7rem 0 10rem 0;
  padding: 1.5rem 5rem;
  background-color: rgba(33, 36, 38, 1);
  color: #b7b7b7;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-radius: 1rem;
  border: 3px solid #b7b7b7;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 .6rem .6rem rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover {
    border: 3px solid #e9c7aa;
    color: #e9c7aa;
    background-color: rgba(33, 36, 38, .7);
  }
`;

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = async () => {
        await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, options)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.warn('Movie not loading', error);
            });
    };

    return (
        <Container>
            <Intro>
                <Backdrop
                    src={currentMovieDetail.posterUrl}
                />
            </Intro>
            <Details>
                <DetailsLeft>
                    <PosterBox>
                        <Poster
                            src={currentMovieDetail.posterUrl}
                        />
                    </PosterBox>
                </DetailsLeft>
                <DetailsRight>
                    <Name>
                        {currentMovieDetail ? currentMovieDetail.nameRu : ''}
                    </Name>
                    <Rating>
                        <VoteAverage>
                            {currentMovieDetail ? currentMovieDetail.ratingKinopoisk : ''}
                        </VoteAverage>
                        <StarIcon/>
                    </Rating>
                    <ReleaseDate>
                        {currentMovieDetail ? 'Дата выхода: ' + currentMovieDetail.year : ''}
                    </ReleaseDate>
                    <Genres>
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map((genre, i) => (
                                    <>
                                        <Genre
                                            key={i}
                                            id={genre}
                                        >
                                            {genre.genre}
                                        </Genre>
                                    </>
                                ))
                                : ''
                        }
                    </Genres>
                    <Description>
                        {currentMovieDetail ? currentMovieDetail.description : ''}
                    </Description>
                </DetailsRight>
            </Details>
            <Link to={'/'}>
                <ButtonReturn>Вернуться</ButtonReturn>
            </Link>
        </Container>
    );
};

export default Movie;