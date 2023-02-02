import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
`
const Year = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem;
  font-size: 2rem;
  opacity: 0;
  color: #f9d3b4;
`
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
`
const Image = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 3s cubic-bezier(0.175, 0.885, 0, 1);

  img {
    width: 100%;
    height: 100%;
  }
`
const Text = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding: .7rem 2rem .7rem 2rem;
  background-color: #343739;
  z-index: 2;
`
const Title = styled.h3`
  font-size: 2rem;
  margin: .5rem 0 1.5rem 0;
  font-family: var(--font-play);
  color: #f9d3b4;
`

const MovieCard = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);

    const imagePath = 'https://image.tmdb.org/t/p/original';
    const year = movie.release_date.substring(0, 4);
    const range = movie.vote_average.toString().length;
    const rangeResult = range === 2 || range === 1 ? movie.vote_average + '.0' : movie.vote_average;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Card>
                        <Skeleton/>
                    </Card>
                    :
                    <Link to={`/movie/${movie.id}`}>
                        <Card>
                            <Year className="movie__year">
                                {year}
                            </Year>
                            <Rating className="movie__range">
                                {rangeResult}
                            </Rating>
                            <Image className="movie__image">
                                {
                                    movie.poster_path
                                        ? <img
                                            src={`${imagePath}${movie.poster_path}`}
                                            alt={movie.title}
                                        />
                                        : null
                                }
                            </Image>
                            <Text>
                                <Title>{movie.title}</Title>
                            </Text>
                        </Card>
                    </Link>
            }
        </>
    );
}

export default MovieCard;