import './search.scss'

const Search = ({searchTerm, setSearchTerm, clearSearchInput}) => {
    return (
        <div className="movie__search">
            <input
                className="movie__search__input"
                placeholder="Type anything"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {
                searchTerm ? (
                    <span
                        className="movie__search__input--clear"
                        onClick={clearSearchInput}
                    >
                                x
                            </span>
                ) : null
            }
            <span className="movie__search__input--bg"/>
        </div>
    )
}

export default Search