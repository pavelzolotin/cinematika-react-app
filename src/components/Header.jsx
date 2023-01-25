import {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'

import {fetchMovies} from '../utils/fetchFromAPI'

import LogoDark from '../img/dark-logo.png'
import LogoLight from '../img/light-logo.png'
import MoonIcon from '../img/moon-icon.svg'
import SunIcon from '../img/sun-warm-icon.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: background-color .3s ease;
  z-index: 10;
`
const Logo = styled.div`
  text-decoration: none;
`
const Img = styled.img``
const Nav = styled.div``
const Tab = styled.button`
  margin: 0 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-decoration: none;
  background-color: transparent;
  color: ${({theme}) => theme.color};
  border: none;
  outline: none;
  cursor: pointer;
`
const MovieSearch = styled.div`
  width: 25%;
  margin: 3rem 4rem;
  position: relative;
`
const Form = styled.form``
const Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  color: #b7b7b7;
  padding: 1.5rem 2.5rem;
  letter-spacing: 0.16rem;
  border: .2rem solid #343739;
  border-radius: 3rem;
  background: transparent;
  transition: border .3s ease;

  & ~ .movie__input--bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #343739;
    border-radius: 3rem;
    opacity: 0;
    transition: .5s;
    z-index: -1;
  }

  &:focus-visible {
    outline: none;
    border: .2rem solid #7e7e7e;
    transition: border .3s ease;
  }

  &:focus ~ .movie__input--bg {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`
const InputClear = styled.span`
  position: absolute;
  top: 2.1rem;
  right: 2.5rem;
  color: #7e7e7e;
  cursor: pointer;
`
const InputBg = styled.span`
  &:focus {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`
const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + .app__toggle-theme--label .app__toggle-theme--toggle {
    transform: translateX(2.8rem);
  }
`
const ToggleLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 0.2rem solid #343739;
  background-color: #212426;
  width: 5.5rem;
  height: 2.6rem;
  border-radius: 5rem;
  padding: .7rem;
  cursor: pointer;

  & .app__toggle-theme--toggle {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    left: .2rem;
    top: 0;
    background-color: #fff;
    border-radius: 50%;
    transition: transform .2s linear;
  }
`
const ToggleIcon = styled.img`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
`
const Toggle = styled.span`
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  left: .2rem;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  transition: transform .2s linear;
`

const Header = ({searchTerm, setSearchTerm, setMovies, theme, setTheme}) => {
    const toggleIsClicked = theme === 'light' ? true : ''

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const clearSearchInput = () => {
        setSearchTerm('')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        fetchMovies(searchTerm, setMovies)

        if (searchTerm.length >= 1) {
            window.scrollTo(0, 0)
        }
    }, [searchTerm])

    return (
        <Container>
            <Link to="/">
                <Logo>
                    <Img
                        src={theme === 'dark' ? LogoLight : LogoDark}
                    />
                </Logo>
            </Link>
            <Nav>
                <NavLink to="/movies/popular" style={({ isActive }) => isActive ? {opacity: '1'} : {opacity: '0.6'}}>
                    <Tab>Popular</Tab>
                </NavLink>
                <NavLink to="/movies/top_rated" style={({ isActive }) => isActive ? {opacity: '1'} : {opacity: '0.6'}}>
                    <Tab>Top Rated</Tab>
                </NavLink>
                <NavLink to="/movies/upcoming" style={({ isActive }) => isActive ? {opacity: '1'} : {opacity: '0.6'}}>
                    <Tab>Upcoming</Tab>
                </NavLink>
            </Nav>
            <MovieSearch>
                <Form>
                    <Input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {
                        searchTerm ? (
                            <InputClear
                                onClick={clearSearchInput}
                            >x
                            </InputClear>
                        ) : null
                    }
                    <InputBg className="movie__input--bg"/>
                </Form>
            </MovieSearch>
            <ToggleInput
                type="checkbox"
                id="theme-toggle"
                onChange={() => toggleTheme()}
                checked={toggleIsClicked}
            />
            <ToggleLabel htmlFor="theme-toggle" className="app__toggle-theme--label">
                <ToggleIcon
                    src={MoonIcon}
                    alt=""
                />
                <ToggleIcon
                    src={SunIcon}
                    alt=""
                />
                <Toggle className="app__toggle-theme--toggle"/>
            </ToggleLabel>
        </Container>
    )
}

export default Header