import {useState, useRef, useMemo} from 'react';
import {useDispatch} from 'react-redux';

import debounce from 'lodash.debounce';
import styled from 'styled-components';

import {setSearchValue} from '../redux/slices/searchSlice';
import IconClose from '../assets/img/close-icon.png';

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

const CloseIcon = styled.div`
  position: absolute;
  top: 2.1rem;
  right: 2.5rem;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.4rem;
  color: #7e7e7e;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const InputBg = styled.span`
  &:focus {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`;

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const updateSearchValue = useMemo(
        () =>
            debounce((str) => {
                dispatch(setSearchValue(str));
            }, 500),
        [dispatch]
    );

    const clearSearchInput = () => {
        dispatch(setSearchValue(''));
        setValue('');

        inputRef.current.focus();
        window.scrollTo(0, 0);
    };

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

  return (
          <Form>
              <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Поиск"
                  value={value}
                  onChange={onChangeInput}
              />
              {
                  value ? (
                      <CloseIcon onClick={clearSearchInput}>
                          <img
                              src={IconClose}
                              alt="close-icon"
                          />
                      </CloseIcon>
                  ) : null
              }
              <InputBg className="movie__input--bg" />
          </Form>
  );
};

export default Search;