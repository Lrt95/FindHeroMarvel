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
      state.user.likes.push(action.payload);
    },
    disLike: (state, action) => {
      console.log('action', action);
      state.user.likes.splice(state.user.likes.indexOf(action.payload), 1);
    },
  },
});

export const {setUser, addLike, disLike} = userSlice.actions;

export default userSlice.reducer;
