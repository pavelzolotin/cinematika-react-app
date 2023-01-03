import Logo from './Logo'
import Search from './Search'
import ToggleMode from './ToggleMode'

const Header = ({logo, searchTerm, setSearchTerm, clearSearchInput, toggleTheme, toggleIsClicked}) => {
    return (
        <div className="app__header">
            <Logo
                logo={logo}
            />
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                clearSearchInput={clearSearchInput}
            />
            <ToggleMode
                toggleTheme={toggleTheme}
                toggleIsClicked={toggleIsClicked}
            />
        </div>
    )
}

export default Header