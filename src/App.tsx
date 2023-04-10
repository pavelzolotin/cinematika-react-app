import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { themeSelector } from './redux/themeMode/selectors';
import Header from './components/Header';
import Home from './pages/Home';
import Loading from './components/Loading';

import { darkTheme, lightTheme } from './utils/Theme';

const Movie = lazy(() => import('./pages/Movie'));

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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

function App() {
    const {theme} = useSelector(themeSelector);

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <BrowserRouter>
                <GlobalStyle />
                <Container>
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <Home />
                        } />
                        <Route path="films/:id" element={
                            <Suspense fallback={<Loading/>}>
                                <Movie />
                            </Suspense>
                        } />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
