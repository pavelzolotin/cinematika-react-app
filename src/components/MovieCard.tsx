import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Skeleton from './Skeleton';

const Card = styled.div`
  position: relative;
  width: 30rem;
  height: 45rem;
  margin: 1.5rem;
  border-radius: 1.2rem;
  overflow: hidden;
  border: none;
  opacity: 1;
  transition: all 2s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.19), 0 .6rem .6rem rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 1rem 1rem rgba(0, 0, 0, 0.23);
    transform: scale(1.08, 1.08);
  }

  &:hover .movie__image {
    height: 100%;
    opacity: 0.2;
    transition: opacity .3s ease;
  }

  &:hover .movie__year,
  &:hover .movie__range {
    opacity: 1;
  }
`;

const Year = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem;
  font-size: 2rem;
  opacity: 0;
  color: #f9d3b4;
`;

const Rating = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: #f9d3b4;
  z-index: 1;
  opacity: 0;

  &:before {
    position: absolute;
    content: "";
    background-color: #343739;
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 5px;
    z-index: -1;
    top: 0;
    right: 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 3s cubic-bezier(0.175, 0.885, 0, 1);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding: .7rem 2rem .7rem 2rem;
  background-color: #343739;
  z-index: 2;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: .5rem 0 1.5rem 0;
  font-family: var(--font-play);
  color: #f9d3b4;
`;

const Genres = styled.span`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: .2rem;
  font-weight: 500;
  color: #b7b7b7;
`;

const MovieCard = ({movie: {filmId, year, posterUrlPreview, nameRu, rating, genres}, isLoading}) => {
    const movieGenres = genres.map(genre => ` ${genre.genre}`).join(',');

    return (
        <>
            {
                isLoading
                    ? <Card>
                        <Skeleton />
                    </Card>
                    :
                    <Link to={`/films/${filmId}`}>
                        <Card>
                            <Year className="movie__year">
                                {year}
                            </Year>
                            <Rating className="movie__range">
                                {rating}
                            </Rating>
                            <Image className="movie__image">
                                <img
                                    src={posterUrlPreview !== 'N/A' ? posterUrlPreview : 'https://via.placeholder.com/400'}
                                    alt={nameRu}
                                />
                            </Image>
                            <Text>
                                <Title>
                                    {nameRu}
                                </Title>
                                <Genres>
                                    {movieGenres}
                                </Genres>
                            </Text>
                        </Card>
                    </Link>
            }
        </>
    );
};

export default MovieCard;