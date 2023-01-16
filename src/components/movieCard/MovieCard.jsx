import './movieCard.scss'

const MovieCard = ({movie}) => {
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    const year = movie.release_date.substring(0, 4)
    const range = movie.vote_average.toString().length
    const rangeResult = range === 2 || range === 1 ? movie.vote_average + '.0' : movie.vote_average

    return (
        <div className="movie">
            <div className="movie__year">
                {year}
            </div>
            <div className="movie__range">
                {rangeResult}
            </div>
            <div className="movie__image">
                {
                    movie.poster_path
                        ? <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                        : null
                }
            </div>
            <div className="movie__text">
                <h3 className="movie__title">{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard