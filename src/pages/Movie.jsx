import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 11rem;
`
const Intro = styled.div`
  width: 85%;

  img {
    border-radius: 0 0 1rem 1rem;
  }
`
const Backdrop = styled.img`
  width: 100%;
  height: 50rem;
  object-fit: cover;
  object-position: 0 35%;
`
const Details = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin-top: -25rem;
  background: rgba(33, 36, 38, 0.7);
  box-shadow: rgba(17, 17, 17, 50%) 0 1rem 1rem .5rem;
  border-radius: 1rem;
`
const DetailsLeft = styled.div`
  margin-right: 3rem;
`
const PosterBox = styled.div``
const Poster = styled.img`
  width: 30rem;
  border-radius: 1rem;
  box-shadow: rgb(17, 17, 17, 85%) 0 2.2rem 4rem .6rem;
`
const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;
  height: 100%;

  & > div {
    text-shadow: 0 0 .5rem #222222;
`
const Name = styled.div`
  font-weight: 600;
  font-size: 3.8rem;
  margin-bottom: 1.2rem;
`
const Tagline = styled.div`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 3rem;
`
const Rating = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`
const VoteAverage = styled.span`
  font-size: 2rem;
  margin-right: .5rem;
`
const VoteCount = styled.span`
  margin-left: 2rem;
`
const Runtime = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`
const ReleaseDate = styled.div`
  font-size: 1.8rem;
  margin-bottom: 5rem;
`
const Genres = styled.div`
  margin-bottom: 3rem;
`
const Genre = styled.span`
  padding: .8rem 1.8rem;
  margin-right: 1.2rem;
  font-size: 1.6rem;
  background-color: rgba(245, 245, 245, .1);
  border-radius: 2rem;
`
const Description = styled.div`
  width: 70%;
  font-size: 1.8rem;
  letter-spacing: 1.2px;
  line-height: 1.7;
`
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

  &:hover {
    border: 3px solid #e9c7aa;
    background-color: rgba(33, 36, 38, .7);
  }
`

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65f253fe48c848a16245196fd36824d8&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }

    return (
        <Container>
            <Intro>
                <Backdrop
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
                />
            </Intro>
            <Details>
                <DetailsLeft>
                    <PosterBox>
                        <Poster
                            src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
                        />
                    </PosterBox>
                </DetailsLeft>
                <DetailsRight>
                    <Name>
                        {currentMovieDetail ? currentMovieDetail.original_title : ''}
                    </Name>
                    <Tagline>
                        {currentMovieDetail ? currentMovieDetail.tagline : ''}
                    </Tagline>
                    <Rating>
                        <VoteAverage>
                            {currentMovieDetail ? currentMovieDetail.vote_average : ''}
                        </VoteAverage>
                        <StarIcon/>
                        <VoteCount>
                            {currentMovieDetail ? '(' + currentMovieDetail.vote_count + ') votes' : ''}
                        </VoteCount>
                    </Rating>
                    <Runtime>
                        {currentMovieDetail ? currentMovieDetail.runtime + ' mins' : ''}
                    </Runtime>
                    <ReleaseDate>
                        {currentMovieDetail ? 'Release date: ' + currentMovieDetail.release_date : ''}
                    </ReleaseDate>
                    <Genres>
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map(genre => (
                                    <>
                                        <Genre
                                            key={genre.id}
                                            id={genre.id}
                                        >
                                            {genre.name}
                                        </Genre>
                                    </>
                                ))
                                : ''
                        }
                    </Genres>
                    <Description>
                        {currentMovieDetail ? currentMovieDetail.overview : ''}
                    </Description>
                </DetailsRight>
            </Details>
            <Link to={'/'}>
                <ButtonReturn>Return</ButtonReturn>
            </Link>
        </Container>
    );
}

export default Movie;