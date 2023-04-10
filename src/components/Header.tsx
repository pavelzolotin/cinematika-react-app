import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { themeSelector } from '../redux/themeMode/selectors';
import ToggleTheme from './ToggleTheme';
import Search from './Search';
import LogoDark from '../assets/img/dark-logo.png';
import LogoLight from '../assets/img/light-logo.png';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3rem 4rem;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: background-color .3s ease;
  z-index: 10;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding-bottom: 1rem;
  }
`;

const Logo = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: .6rem;
    left: .6rem;
  }
`;
const Img = styled.img`
  @media (max-width: 767px) {
    width: 70%;
  }
`;

const MovieSearch = styled.div`
  width: 25%;
  position: relative;

  @media (max-width: 767px) {
    width: 90%;
    margin: 6rem 0 0 0;
  }
`;

const Header = () => {
    const {theme} = useSelector(themeSelector);
    const {pathname} = useLocation();

    return (
        <Container>
            <Link to="/">
                <Logo>
                    <Img
                        src={theme === 'dark' ? LogoLight : LogoDark}
                    />
                </Logo>
            </Link>
            <MovieSearch>
                {
                    pathname === '/' && (
                        <Search />
                    )
                }
            </MovieSearch>
            <ToggleTheme />
        </Container>
    );
};

export default Header;