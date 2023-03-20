import {configureStore} from '@reduxjs/toolkit';

import search from './slices/searchSlice';
import mode from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        search,
        mode
    },
});