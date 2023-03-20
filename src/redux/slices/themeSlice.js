import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem('theme') || 'dark'
};

const themeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        }
    }
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;