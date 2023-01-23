import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetchMovie()
        window.scrollTo(0, 0)
    }, [])

    const fetchMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65f253fe48c848a16245196fd36824d8&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop"
                     src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}/>
            </div>
            <div className="movie__details">
                <div className="movie__details--left">
                    <div className="movie__poster-box">
                        <img className="movie__poster"
                             src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}/>
                    </div>
                </div>
                <div className="movie__details--right">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ''}</div>
                    <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ''}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average : ''} <i className="fas fa-star"/>
                        <span
                            className="movie__vote-count">{currentMovieDetail ? '(' + currentMovieDetail.vote_count + ') votes' : ''}</span>
                    </div>
                    <div
                        className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + ' mins' : ''}</div>
                    <div
                        className="movie__release-date">{currentMovieDetail ? 'Release date: ' + currentMovieDetail.release_date : ''}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                ))
                                : ''
                        }
                    </div>
                    <div className="movie__description">{currentMovieDetail ? currentMovieDetail.overview : ''}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails