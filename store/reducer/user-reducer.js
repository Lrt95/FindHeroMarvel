import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: '',
      likes: [],
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    addLike: (state, action) => {
      state.user.email.push(action.payload);
    },
  },
});

export const {setUser, addLike} = userSlice.actions;

export default userSlice.reducer;
