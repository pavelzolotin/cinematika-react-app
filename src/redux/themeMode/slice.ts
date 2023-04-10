import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeSliceState } from './types';

const initialState: ThemeSliceState = {
    theme: localStorage.getItem('theme') || 'light'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        }
    }
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;