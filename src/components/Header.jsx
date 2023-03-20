import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import {setSearchValue} from '../redux/slices/searchSlice';
import ToggleTheme from './ToggleTheme';
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
  margin: 3rem 4rem;
  position: relative;

  @media (max-width: 767px) {
    width: 90%;
    margin: 6rem 0 0 0;
  }
`;

const Form = styled.form``;

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
`;

const InputClear = styled.span`
  position: absolute;
  top: 1.9rem;
  right: 2.5rem;
  font-size: 1.4rem;
  color: #7e7e7e;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

const InputBg = styled.span`
  &:focus {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`;

const Header = () => {
    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.search);
    const {theme} = useSelector(state => state.mode);

    const clearSearchInput = () => {
        dispatch(setSearchValue(''));
        window.scrollTo(0, 0);
    };

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
                <Form>
                    <Input
                        type="text"
                        placeholder="Поиск"
                        value={searchValue}
                        onChange={(e) => dispatch(setSearchValue(e.target.value))}
                    />
                    {
                        searchValue ? (
                            <InputClear onClick={clearSearchInput}>
                                x
                            </InputClear>
                        ) : null
                    }
                    <InputBg className="movie__input--bg"/>
                </Form>
            </MovieSearch>
            <ToggleTheme/>
        </Container>
    );
};

export default Header;