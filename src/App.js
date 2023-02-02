import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

import Header from './components/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieList from './components/MovieList';

import {darkTheme, lightTheme} from './utils/Theme';

const GlobalStyle = createGlobalStyle`
  :root {
    /** sunny side **/
    --blue-border: #72cce3;
    --blue-color: #96dcee;
    --yellow-background: #fffaa8;
    --yellow-border: #f5eb71;
    /** dark side **/
    --indigo-border: #5d6baa;
    --indigo-color: #6b7abb;
    --gray-border: #e8e8ea;
    --gray-dots: #e8e8ea;
    /** general **/
    --white: #fff;
  }

  /* base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Play', sans-serif;
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.color};
    transition: background-color .3s ease;
  }

  html {
    font-size: 62.5%;
  }

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: .5rem .5rem .5rem -.5rem rgba(34, 60, 80, 0.2) inset;
    background-color: #212426;
  }

  ::-webkit-scrollbar-thumb {
    background: #343739;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: .5rem .5rem .5rem -.5rem rgba(34, 60, 80, 0.2) inset;
    background-color: #212426;
  }

  ::-webkit-scrollbar-thumb {
    background: #343739;
  }

  a {
    text-decoration: none;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <BrowserRouter>
                <GlobalStyle/>
                <Container>
                    <Header
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        setMovies={setMovies}
                        theme={theme}
                        setTheme={setTheme}
                    />
                    <Routes>
                        <Route path="/" element={
                            <Home
                                searchTerm={searchTerm}
                                movies={movies}
                                setMovies={setMovies}
                            />
                        }/>
                        <Route path="movie/:id" element={<Movie/>}/>
                        <Route path="movies/:type" element={
                            <MovieList
                                movies={movies}
                                setMovies={setMovies}
                            />
                        }/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
