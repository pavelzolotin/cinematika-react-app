import {useEffect, useState} from 'react'

import {fetchMovies} from '../../utils/fetchFromAPI'

import MoonIcon from '../../img/moon-icon.svg'
import SunIcon from '../../img/sun-warm-icon.svg'
import './header.scss'

const Header = ({searchTerm, setSearchTerm, setMovies}) => {
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

    const clearSearchInput = () => {
        setSearchTerm('')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
        localStorage.setItem('header', headerBg)
        document.body.className = theme
    }, [theme, logo, headerBg])

    useEffect(() => {
        fetchMovies(searchTerm, setMovies)

        if (searchTerm.length >= 1) {
            window.scrollTo(0, 0)
        }
    }, [searchTerm])

    return (
        <div className={`app__header ${headerBg}`}>
            <a href="/" className="app__logo">
                <h1 className={`app__title ${logo}`}>Cinematika</h1>
            </a>
            <div className="movie__search">
                <form>
                    <input
                        type="text"
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
                            >x</span>
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