import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import Search from '../components/Search';

describe('Search component', () => {
    test('Search rendered', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
    });

    test('onChange works', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    test('pass valid letters', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        userEvent.type(input, 'asd');

        expect(screen.getByTestId('search-input')).toHaveValue('asd');
    });
});