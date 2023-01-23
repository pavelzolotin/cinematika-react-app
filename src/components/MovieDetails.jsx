import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetchMovie()
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
                     src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
                />
            </div>
            <div className="movie__details">
                <div className="movie__details--left">
                    <div className="movie__poster-box">
                        <img className="movie__poster"
                             src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
                        />
                    </div>
                </div>
                <div className="movie__details--right">
                    <div className="movie__name">
                        {currentMovieDetail ? currentMovieDetail.original_title : ''}
                    </div>
                    <div className="movie__tagline">
                        {currentMovieDetail ? currentMovieDetail.tagline : ''}
                    </div>
                    <div className="movie__rating">
                        <span className="movie__vote-average">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ''}
                        </span>
                        <i className="fas fa-star"/>
                        <span className="movie__vote-count">
                            {currentMovieDetail ? '(' + currentMovieDetail.vote_count + ') votes' : ''}
                        </span>
                    </div>
                    <div className="movie__runtime">
                        {currentMovieDetail ? currentMovieDetail.runtime + ' mins' : ''}
                    </div>
                    <div className="movie__release-date">
                        {currentMovieDetail ? 'Release date: ' + currentMovieDetail.release_date : ''}
                    </div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map(genre => (
                                    <>
                                        <span
                                            key={genre.id}
                                            id={genre.id}
                                            className="movie__genre"
                                        >
                                            {genre.name}
                                        </span>
                                    </>
                                ))
                                : ''
                        }
                    </div>
                    <div className="movie__description">
                        {currentMovieDetail ? currentMovieDetail.overview : ''}
                    </div>
                </div>
            </div>
            <Link to={'/'} className="movie__btn-return">Return</Link>
        </div>
    )
}

export default MovieDetails