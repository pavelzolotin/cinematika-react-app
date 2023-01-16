import {useEffect, useState} from 'react'

import Logo from '../logo/Logo'
import Search from '../search/Search'
import ToggleMode from '../toggleMode/ToggleMode'

import './header.scss'

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )

    const [logo, setLogoColor] = useState(
        localStorage.getItem('logo') || 'lighten'
    )

    const [headerBg, setHeaderBg] = useState(
        localStorage.getItem('header') || 'dark'
    )

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

    useEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
        localStorage.setItem('header', headerBg)
        document.body.className = theme
    }, [theme, logo, headerBg])

    return (
        <div className={`app__header ${headerBg}`}>
            <Logo
                logo={logo}
            />
            <Search/>
            <ToggleMode
                toggleTheme={toggleTheme}
                toggleIsClicked={toggleIsClicked}
            />
        </div>
    )
}

export default Header