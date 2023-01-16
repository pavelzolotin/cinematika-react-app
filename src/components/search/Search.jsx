import './search.scss'

const Search = ({fetchMovies, searchKey, setSearchKey}) => {

    const clearSearchInput = () => {
        setSearchKey('')
    }

    return (
        <div className="movie__search">
            <form onSubmit={fetchMovies}>
                <input
                    className="movie__search__input"
                    placeholder="Type anything"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                {
                    searchKey ? (
                        <span
                            className="movie__search__input--clear"
                            onClick={clearSearchInput}
                        >
                                x
                            </span>
                    ) : null
                }
                <span className="movie__search__input--bg"/>
            </form>
        </div>
    )
}

export default Search