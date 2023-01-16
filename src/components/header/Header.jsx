import {useEffect, useState} from 'react'

import Logo from '../logo/Logo'
import Search from '../search/Search'
import ToggleMode from '../toggleMode/ToggleMode'
import './header.scss'

const API_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

const Header = ({getMovies, API_URL}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchResult = `${API_SEARCH}${searchTerm}`
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )

    const [logo, setLogoColor] = useState(
        localStorage.getItem('logo') || 'lighten'
    )

    const themeMode = theme === 'dark' ? 'dark-mode' : 'light-mode'
    const toggleIsClicked = theme === 'light' ? true : ''

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            setLogoColor('darken')
        } else {
            setTheme('dark')
            setLogoColor('lighten')
        }
    }

    const clearSearchInput = () => {
        setSearchTerm('')
        getMovies(API_URL)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
        document.body.className = theme
    }, [theme, logo])

    useEffect(() => {
        if (searchTerm !== '') {
            getMovies(searchResult)
        } else {
            getMovies(API_URL)
        }
    }, [searchTerm, searchResult])

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