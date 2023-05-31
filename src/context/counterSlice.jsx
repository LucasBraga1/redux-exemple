import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmout: (state, actions) => state + actions.payload,
    decrementByAmout: (state, actions) => state - actions.payload
  },
});

export const { increment, decrement, incrementByAmout, decrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
