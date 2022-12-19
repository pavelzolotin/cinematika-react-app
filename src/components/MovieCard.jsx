const MovieCard = ({movie: {kinopoiskId, year, posterUrlPreview, nameRu, genres}}) => {
    return (
        <div className="movie" key={kinopoiskId}>
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
                <span className="movie__genre">{genres.map(genre => ` ${genre.genre}`)}</span>
            </div>
        </div>
    )
}

export default MovieCard