import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './search/slice';
import themeSlice from './themeMode/slice';

export const store = configureStore({
    reducer: {
        search: searchSlice,
        theme: themeSlice
    },
});