import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styled from 'styled-components';

import {setTheme} from '../redux/slices/themeSlice';
import MoonIcon from '../assets/img/moon-icon.svg';
import SunIcon from '../assets/img/sun-warm-icon.svg';

const ToggleBox = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
  }
`;

const Toggle = styled.span`
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  left: .2rem;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  transition: transform .2s linear;
`;

const Label = styled.label`
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

  & ${Toggle} {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    left: .2rem;
    top: 0;
    background-color: #fff;
    border-radius: 50%;
    transition: transform .2s linear;
  }
`;

const Input = styled.input`
  position: absolute;
  right: 0;
  visibility: hidden;

  &:checked + ${Label} ${Toggle} {
    transform: translateX(2.8rem);
  }
`;

const Icon = styled.img`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
`;

const ToggleTheme = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.mode);
    const toggleIsClicked = theme === 'light' ? true : '';

    const toggleTheme = () => {
        if (theme === 'dark') {
            dispatch(setTheme('light'));
        } else {
            dispatch(setTheme('dark'));
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ToggleBox>
            <Input
                type="checkbox"
                id="theme-toggle"
                onChange={() => toggleTheme()}
                checked={toggleIsClicked}
            />
            <Label htmlFor="theme-toggle" className="app__toggle-theme--label">
                <Icon
                    src={MoonIcon}
                    alt=""
                />
                <Icon
                    src={SunIcon}
                    alt=""
                />
                <Toggle className="app__toggle-theme--toggle"/>
            </Label>
        </ToggleBox>
    );
};

export default ToggleTheme;