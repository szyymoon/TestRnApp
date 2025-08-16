import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterState {
  counterValue: number;
}

const initialState: CounterState = {
  counterValue: 0,
};

export const countrerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counterValue += 1;
    },
    decrement: state => {
      state.counterValue -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload;
    },
    reset: state => {
      state.counterValue = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  countrerSlice.actions;

export default countrerSlice.reducer;
