import {useEffect} from 'react';

import styled from 'styled-components';

import MoonIcon from '../assets/img/moon-icon.svg';
import SunIcon from '../assets/img/sun-warm-icon.svg';

const ToggleBox = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
  }
`;

const ToggleInput = styled.input`
  position: absolute;
  right: 0;
  visibility: hidden;

  &:checked + .app__toggle-theme--label .app__toggle-theme--toggle {
    transform: translateX(2.8rem);
  }
`;

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
`;

const ToggleIcon = styled.img`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
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

const ToggleTheme = ({theme, setTheme}) => {
    const toggleIsClicked = theme === 'light' ? true : '';

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ToggleBox>
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
        </ToggleBox>
    );
};

export default ToggleTheme;