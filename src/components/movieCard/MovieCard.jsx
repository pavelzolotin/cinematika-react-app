import './movieCard.scss'

const MovieCard = ({movie: {filmId, year, posterUrlPreview, nameRu, genres}}) => {
    const movieGenres = genres.map(genre => ` ${genre.genre}`).join(',')

    return (
        <div className="movie" key={filmId}>
            <div className="movie__year">
                <p>{year}</p>
            </div>
            <div className="movie__image">
                <img
                    src={posterUrlPreview !== 'N/A' ? posterUrlPreview : 'https://via.placeholder.com/400'}
                    alt={nameRu}
                />
            </div>
            <div className="movie__text">
                <h3 className="movie__title">{nameRu}</h3>
                <span className="movie__genre">{movieGenres}</span>
            </div>
        </div>
    )
}

export default MovieCard