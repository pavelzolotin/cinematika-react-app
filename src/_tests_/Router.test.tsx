import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import { store } from '../redux/store';

describe('Router test', () => {
    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asdasd']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});