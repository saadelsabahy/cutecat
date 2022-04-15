import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KawaiiMood } from 'react-kawaii';
import { moods } from '../../moods';

export interface catState {
	mood: KawaiiMood;
}

const initialState: catState = {
	mood: 'sad',
};

export const catSlice = createSlice({
	name: 'cat',
	initialState,
	reducers: {
		changeMood: (state, action: PayloadAction<string>) => {
			state.mood = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeMood } = catSlice.actions;

export default catSlice.reducer;
