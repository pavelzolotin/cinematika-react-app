import {useEffect, useState} from 'react'

// import axios from 'axios'
// import {API_KEY, SEARCH_API} from '../../src/utils/constants'
import {fetchFromAPI} from '../../utils/fetchFromAPI'

import MoonIcon from '../../img/moon-icon.svg'
import SunIcon from '../../img/sun-warm-icon.svg'
import './header.scss'


const Header = ({searchKey, setSearchKey, setMovies}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const [logo, setLogoColor] = useState(localStorage.getItem('logo') || 'lighten')
    const [headerBg, setHeaderBg] = useState(localStorage.getItem('header') || 'dark')
    const toggleIsClicked = theme === 'light' ? true : ''

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            setLogoColor('darken')
            setHeaderBg('light')
        } else {
            setTheme('dark')
            setLogoColor('lighten')
            setHeaderBg('dark')
        }
    }

    const onSearchSubmit = (e) => {
        e.preventDefault()
        fetchFromAPI(searchKey, setMovies)
    }

    const clearSearchInput = () => {
        setSearchKey('')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
        localStorage.setItem('header', headerBg)
        document.body.className = theme
    }, [theme, logo, headerBg])

    return (
        <div className={`app__header ${headerBg}`}>
            <a href="/" className="app__logo">
                <h1 className={`app__title ${logo}`}>Cinematika</h1>
            </a>
            <div className="movie__search">
                <form onSubmit={onSearchSubmit}>
                    <input
                        type="text"
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
            <input
                type="checkbox"
                id="theme-toggle"
                className="app__toggle-theme--checkbox"
                onChange={() => toggleTheme()}
                checked={toggleIsClicked}
            />
            <label htmlFor="theme-toggle" className="app__toggle-theme--label">
                <img
                    className="app__toggle-theme--icon"
                    src={MoonIcon}
                    alt=""
                />
                <img
                    className="app__toggle-theme--icon"
                    src={SunIcon}
                    alt=""
                />
                <span className="app__toggle-theme--toggle"/>
            </label>
        </div>
    )
}

export default Header