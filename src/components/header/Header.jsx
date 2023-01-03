import Logo from '../logo/Logo'
import Search from '../search/Search'
import ToggleMode from '../toggleMode/ToggleMode'
import './header.scss'

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